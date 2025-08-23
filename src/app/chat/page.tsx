"use client";

import { useState } from "react";
import { 
  ChatSidebar, 
  ChatHeader, 
  ChatComposer, 
  EmptyState 
} from "@/components/chat";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const handleNewChat = () => {
    console.log("New chat created");
  };

  const handleSend = (message: string, services: any) => {
    console.log("Message sent:", message, services);
  };

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={handleNewChat} 
      />

      <main className={`
        flex-1 flex flex-col items-center justify-center relative transition-all duration-300
        ${sidebarOpen ? 'ml-64' : 'ml-0'}
      `}>
        <div className="w-full max-w-4xl mx-auto flex flex-col h-full px-4">
          {/* <ChatHeader /> */}
          <div className="flex-1 flex items-center justify-center">
            <EmptyState />
          </div>
          <div className="pb-6">
            <ChatComposer onSend={handleSend} />
          </div>
        </div>
      </main>
    </div>
  );
}
