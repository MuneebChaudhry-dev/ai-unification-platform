export interface N8nRequest {
  model: string;
  taskType: string;
  message: string;
  sessionId: string;
  attachments?: File[];
}

export interface N8nResponse {
  success: boolean;
  data?: {
    response: string;
    model: string;
    usage?: {
      tokens: number;
      cost: number;
    };
  };
  error?: string;
}

export interface StreamChunk {
  type: 'begin' | 'item' | 'end';
  content?: string;
  metadata: {
    nodeId: string;
    nodeName: string;
    itemIndex: number;
    runIndex: number;
    timestamp: number;
  };
}

class N8nService {
  private webhookUrl: string;

  constructor() {
    this.webhookUrl = this.getWebhookUrlFromEnv();
  }

  private getWebhookUrlFromEnv(): string {
    const envUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    if (!envUrl) {
      console.warn('N8N webhook URL not configured. Please set NEXT_PUBLIC_N8N_WEBHOOK_URL in your .env.local file');
      return 'http://localhost:5678/webhook/ai-chat';
    }
    return envUrl;
  }

  async sendChatRequest(
    request: N8nRequest, 
    onStream?: (chunk: string) => void
  ): Promise<N8nResponse> {
    try {
      const formData = new FormData();
      
      // Add basic data
      formData.append('model', request.model);
      formData.append('taskType', request.taskType);
      formData.append('message', request.message);
      formData.append('sessionId', request.sessionId);

      // Add attachments if any
      if (request.attachments && request.attachments.length > 0) {
        request.attachments.forEach((file, index) => {
          formData.append(`attachment_${index}`, file);
        });
      }

      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response is streaming (content-type or presence of reader)
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      if (reader && onStream) {
        let fullContent = '';
        let buffer = '';
        
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            buffer += decoder.decode(value, { stream: true });
            
            // Split by lines to handle multiple JSON objects
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Keep incomplete line in buffer
            
            for (const line of lines) {
              if (line.trim()) {
                try {
                  const chunk: StreamChunk = JSON.parse(line);
                  if (chunk.type === 'item' && chunk.content) {
                    fullContent += chunk.content;
                    onStream(chunk.content);
                  }
                } catch (parseError) {
                  console.warn('Failed to parse streaming chunk:', line);
                }
              }
            }
          }
          
          return {
            success: true,
            data: {
              response: fullContent,
              model: request.model
            }
          };
        } finally {
          reader.releaseLock();
        }
      } else {
        // Fallback to regular JSON response
        const result = await response.json();
        return result;
      }
    } catch (error) {
      console.error('N8n service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  // Alternative method for JSON-only requests (if you prefer not to use FormData)
  async sendJsonRequest(request: Omit<N8nRequest, 'attachments'>): Promise<N8nResponse> {
    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('N8n service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  getWebhookUrl(): string {
    return this.webhookUrl;
  }

  isConfigured(): boolean {
    return !!process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  }
}

export const n8nService = new N8nService();