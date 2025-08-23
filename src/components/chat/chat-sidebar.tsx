import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { SidebarItem } from "./sidebar-item";

interface ChatSidebarProps {
  onNewChat?: () => void;
}

export function ChatSidebar({ onNewChat }: ChatSidebarProps) {
  const chatHistory = [
    { id: 1, title: "Image Generation", subtitle: "Create a futuristic cityscape...", active: true },
    { id: 2, title: "Code Review", subtitle: "Review my React component...", active: false },
    { id: 3, title: "Content Writing", subtitle: "Write a blog post about AI...", active: false },
    { id: 4, title: "Video Script", subtitle: "Create a promotional video...", active: false },
  ];

  return (
    <aside className="col-span-12 md:col-span-3 lg:col-span-3">
      <Card className="p-4 h-[70vh] md:h-[76vh] flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Chat History</div>
          <Button size="sm" onClick={onNewChat}>
            + New Chat
          </Button>
        </div>
        
        <div className="relative mb-3">
          <Input 
            placeholder="Search" 
            className="text-sm"
          />
        </div>
        
        <div className="space-y-2 overflow-auto pr-1">
          {chatHistory.map((chat) => (
            <SidebarItem
              key={chat.id}
              title={chat.title}
              subtitle={chat.subtitle}
              active={chat.active}
            />
          ))}
        </div>
      </Card>
    </aside>
  );
}