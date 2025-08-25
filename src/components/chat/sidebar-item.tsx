interface SidebarItemProps {
  title: string;
  subtitle: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ title, subtitle, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
        active ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
      }`}
      onClick={onClick}
    >
      <div className="text-sm font-medium truncate">{title}</div>
      <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
    </button>
  );
}