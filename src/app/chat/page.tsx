"use client";

import { 
  ChatSidebar, 
  ChatHeader, 
  ChatComposer, 
  EmptyState 
} from "@/components/chat";

export default function ChatPage() {
  const handleNewChat = () => {
    console.log("New chat created");
  };

  const handleSend = (message: string, services: any) => {
    console.log("Message sent:", message, services);
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar onNewChat={handleNewChat} />
      
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <EmptyState />
        <ChatComposer onSend={handleSend} />
      </div>
    </div>
  );
}
