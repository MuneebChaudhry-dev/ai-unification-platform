"use client";

import { useState, useEffect } from "react";
import { 
  ChatSidebar, 
  ChatComposer, 
  EmptyState 
} from "@/components/chat";
import { TaskTabs, TaskType } from "@/components/chat/task-tabs";
import { ModelSelector } from "@/components/chat/model-selector";
import { ChatMessages, ChatMessage } from "@/components/chat/chat-messages";
import { n8nService } from "@/lib/n8n-service";
import { sessionManager } from "@/lib/session-manager";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTask, setActiveTask] = useState<TaskType>("chat");
  const [selectedModel, setSelectedModel] = useState("deepseek/deepseek-chat-v3.1");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string>("");

  // Initialize session on component mount
  useEffect(() => {
    const sessionId = sessionManager.getOrCreateSessionId();
    setCurrentSessionId(sessionId);
    console.log("Initialized session:", sessionId);
  }, []);
  
  const handleNewChat = () => {
    console.log("New chat created");
    const newSessionId = sessionManager.startNewSession();
    setCurrentSessionId(newSessionId);
    setMessages([]);
    console.log("Started new session:", newSessionId);
  };

  const handleSend = async (message: string, attachments: File[]) => {
    if (isLoading) return;
    
    // Get or create session ID
    let sessionId = currentSessionId;
    if (!sessionId) {
      sessionId = sessionManager.getOrCreateSessionId();
      setCurrentSessionId(sessionId);
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      model: selectedModel,
      taskType: activeTask,
      sessionId,
      timestamp: new Date(),
      attachments,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Add streaming message for assistant
    const streamingMessageId = (Date.now() + 1).toString();
    const streamingMessage: ChatMessage = {
      id: streamingMessageId,
      type: 'assistant',
      content: '',
      model: selectedModel,
      taskType: activeTask,
      sessionId,
      timestamp: new Date(),
      isLoading: true,
      isStreaming: false,
    };
    
    setMessages(prev => [...prev, streamingMessage]);
    
    try {
      // Send request to n8n webhook with streaming support
      const response = await n8nService.sendChatRequest(
        {
          model: selectedModel,
          taskType: activeTask,
          message: message,
          sessionId,
          attachments: attachments.length > 0 ? attachments : undefined,
        },
        // Stream callback
        (chunk: string) => {
          setMessages(prev => prev.map(msg => 
            msg.id === streamingMessageId 
              ? {
                  ...msg,
                  content: msg.content + chunk,
                  isLoading: false,
                  isStreaming: true,
                }
              : msg
          ));
        }
      );
      
      // Update the message when streaming is complete
      setMessages(prev => prev.map(msg => 
        msg.id === streamingMessageId 
          ? {
              ...msg,
              content: response.success ? (response.data?.response || msg.content || 'No response received') : 'Error occurred',
              isLoading: false,
              isStreaming: false,
              error: response.success ? undefined : response.error,
            }
          : msg
      ));
    } catch (error) {
      // Handle error
      setMessages(prev => prev.map(msg => 
        msg.id === streamingMessageId 
          ? {
              ...msg,
              content: '',
              isLoading: false,
              isStreaming: false,
              error: error instanceof Error ? error.message : 'Unknown error occurred',
            }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const getPlaceholder = () => {
    switch (activeTask) {
      case "chat":
        const modelName = selectedModel.split('/')[1] || selectedModel;
        return `Message ${modelName}...`;
      case "image":
        return "Describe the image you want to generate...";
      case "video":
        return "Describe the video you want to create...";
      case "research":
        return "What would you like to research?...";
      case "code":
        return "Describe the code you need help with...";
      default:
        return "Type your message...";
    }
  };

  const getEmptyStateContent = () => {
    switch (activeTask) {
      case "chat":
        return {
          title: "Start a conversation",
          description: "Ask questions, get help, or have a conversation with AI."
        };
      case "image":
        return {
          title: "Generate images",
          description: "Describe what you want to see and AI will create it for you."
        };
      case "video":
        return {
          title: "Create videos",
          description: "Describe your video idea and let AI bring it to life."
        };
      case "research":
        return {
          title: "Research anything",
          description: "Get comprehensive research and analysis on any topic."
        };
      case "code":
        return {
          title: "Code with AI",
          description: "Get help with coding, debugging, and software development."
        };
      default:
        return {
          title: "Choose a task",
          description: "Select a task type above to get started."
        };
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={handleNewChat} 
      />

      <main className={`
        flex-1 flex flex-col relative transition-all duration-300
        ${sidebarOpen ? 'ml-64' : 'ml-0'}
      `}>
        <div className="w-full max-w-4xl mx-auto flex flex-col h-full px-4">
          {/* Task Tabs */}
          <div className="pt-6">
            <TaskTabs 
              activeTab={activeTask} 
              onTabChange={setActiveTask}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {messages.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <EmptyState 
                  title={getEmptyStateContent().title}
                  description={getEmptyStateContent().description}
                />
              </div>
            ) : (
              <ChatMessages messages={messages} />
            )}
          </div>

          {/* Model Selection */}
          <ModelSelector 
            taskType={activeTask}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />

          {/* Chat Composer */}
          <div className="pb-6">
            <ChatComposer 
              onSend={handleSend}
              selectedModel={selectedModel}
              placeholder={getPlaceholder()}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
