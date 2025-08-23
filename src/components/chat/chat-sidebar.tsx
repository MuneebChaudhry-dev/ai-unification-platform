import { Button } from "@/components/ui/button";
import { SidebarItem } from "./sidebar-item";
import { PlusIcon, PanelLeftClose, PanelLeft } from "lucide-react";

interface ChatSidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onNewChat?: () => void;
}

export function ChatSidebar({ isOpen = true, onToggle, onNewChat }: ChatSidebarProps) {
  const chatHistory = [
    { id: 1, title: "Image Generation", subtitle: "Create a futuristic cityscape...", active: true },
    { id: 2, title: "Code Review", subtitle: "Review my React component...", active: false },
    { id: 3, title: "Content Writing", subtitle: "Write a blog post about AI...", active: false },
    { id: 4, title: "Video Script", subtitle: "Create a promotional video...", active: false },
    { id: 5, title: "Data Analysis", subtitle: "Analyze sales trends...", active: false },
    { id: 6, title: "Email Draft", subtitle: "Professional email template...", active: false },
  ];

  return (
    <>
      {/* Toggle button for closed sidebar */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 p-2 bg-background border rounded-md shadow-sm hover:bg-accent transition-colors"
          aria-label="Open sidebar"
        >
          <PanelLeft className="h-5 w-5" />
        </button>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-40 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              AI
            </div>
            <h1 className="font-semibold text-sm">AI Platform</h1>
          </div>
          
          <button
            onClick={onToggle}
            className="p-1.5 hover:bg-accent rounded-md transition-colors"
            aria-label="Close sidebar"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <Button 
            onClick={onNewChat}
            className="w-full justify-start gap-3 h-10 bg-background border hover:bg-accent text-foreground"
            variant="outline"
          >
            <PlusIcon className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        {/* Divider */}
        <div className="mx-4 border-t"></div>

        {/* Recent Chats */}
        <div className="flex-1 overflow-hidden">
          <div className="px-4 py-3">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Recent Chats
            </h3>
          </div>
          
          <div className="px-2 pb-4 overflow-auto h-full">
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

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden" 
          onClick={onToggle}
        />
      )}
    </>
  );
}