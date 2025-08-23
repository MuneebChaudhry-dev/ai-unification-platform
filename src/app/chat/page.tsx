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
    <div className="container-max pt-6 pb-10">
      <div className="grid grid-cols-12 gap-6">
        <ChatSidebar onNewChat={handleNewChat} />

        <section className="col-span-12 md:col-span-9 lg:col-span-9 flex flex-col">
          <ChatHeader />
          <EmptyState />
          <ChatComposer onSend={handleSend} />
        </section>
      </div>
    </div>
  );
}
