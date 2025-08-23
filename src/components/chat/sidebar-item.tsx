import { MessageSquare, MoreHorizontal } from "lucide-react";

interface SidebarItemProps {
  title: string;
  subtitle: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ title, subtitle, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      className={`group w-full text-left px-3 py-2 rounded-lg transition-all duration-200 relative ${
        active 
          ? "bg-accent text-accent-foreground" 
          : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <MessageSquare className="h-4 w-4" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">
            {title}
          </div>
          {subtitle && (
            <div className="text-xs opacity-70 truncate mt-0.5">
              {subtitle}
            </div>
          )}
        </div>
        
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="p-1 hover:bg-accent rounded"
            onClick={(e) => {
              e.stopPropagation();
              // Handle menu actions
            }}
          >
            <MoreHorizontal className="h-3 w-3" />
          </button>
        </div>
      </div>
    </button>
  );
}