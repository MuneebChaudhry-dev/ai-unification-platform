"use client";

import { Card } from "@/components/ui/card";

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  model?: string;
  taskType?: string;
  sessionId: string;
  timestamp: Date;
  attachments?: File[];
  isLoading?: boolean;
  isStreaming?: boolean;
  error?: string;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in-bottom`}
        >
          <div
            className={`max-w-[80%] ${
              message.type === 'user'
                ? 'bg-brand text-background rounded-2xl rounded-br-md'
                : 'bg-card text-foreground rounded-2xl rounded-bl-md'
            } px-4 py-3 shadow-sm`}
          >
            {/* Message header for assistant messages */}
            {message.type === 'assistant' && message.model && (
              <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                <span className="font-medium">{message.model}</span>
                {message.taskType && (
                  <>
                    <span>•</span>
                    <span className="capitalize">{message.taskType}</span>
                  </>
                )}
              </div>
            )}

            {/* Attachments for user messages */}
            {message.type === 'user' && message.attachments && message.attachments.length > 0 && (
              <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                  {message.attachments.map((file, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-1 bg-white/20 rounded px-2 py-1 text-xs"
                    >
                      <span>
                        {file.type.startsWith('image/') ? '🖼️' : 
                         file.type.startsWith('video/') ? '🎬' :
                         file.type.includes('pdf') ? '📄' :
                         file.type.includes('text') ? '📝' : '📎'}
                      </span>
                      <span className="truncate max-w-20">{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message content */}
            {message.isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-pulse-subtle">Thinking...</div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            ) : message.error ? (
              <div className="text-red-400">
                <div className="font-medium">Error occurred</div>
                <div className="text-sm opacity-80">{message.error}</div>
              </div>
            ) : (
              <div className="whitespace-pre-wrap break-words">
                {message.content}
                {message.isStreaming && (
                  <span className="inline-block w-2 h-5 bg-current animate-pulse ml-1">|</span>
                )}
              </div>
            )}

            {/* Timestamp */}
            <div className={`text-xs mt-2 opacity-60 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}