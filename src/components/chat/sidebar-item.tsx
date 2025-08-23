interface SidebarItemProps {
  title: string;
  subtitle: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ title, subtitle, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      className={`w-full text-left px-3 py-3 rounded-lg border transition ${
        active ? "border-brand/60 bg-white/5" : "border-transparent hover:bg-white/5"
      }`}
      onClick={onClick}
    >
      <div className="text-sm font-medium text-foreground/90 truncate">{title}</div>
      <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
    </button>
  );
}