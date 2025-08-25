import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { SidebarItem } from "./sidebar-item";

interface ChatSidebarProps {
  onNewChat?: () => void;
}

export function ChatSidebar({ onNewChat }: ChatSidebarProps) {
  const chatHistory = [
    { id: 1, title: "New Chat", subtitle: "Start a conversation...", active: true },
  ];

  return (
    <aside className="w-64 border-r bg-muted/30 flex flex-col h-screen">
      <div className="p-4 border-b">
        <Button onClick={onNewChat} className="w-full justify-start gap-2">
          <span className="text-lg">+</span>
          New Chat
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <Input 
            placeholder="Search conversations..." 
            className="mb-4"
          />
          
          <div className="space-y-1">
            {chatHistory.map((chat) => (
              <SidebarItem
                key={chat.id}
                title={chat.title}
                subtitle={chat.subtitle}
                active={chat.active}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}