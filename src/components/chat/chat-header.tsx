import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface ChatHeaderProps {
  model?: string;
  credits?: number;
  onDownload?: () => void;
  onCopy?: () => void;
  onDelete?: () => void;
}

export function ChatHeader({ 
  model = "GPT-4", 
  credits = 1247,
  onDownload,
  onCopy, 
  onDelete 
}: ChatHeaderProps) {
  return (
    <header className="border-b p-4 flex items-center justify-between bg-background">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-brand grid place-items-center text-white font-bold">
            AI
          </div>
          <div>
            <div className="font-semibold">{model}</div>
            <div className="text-xs text-muted-foreground">Ready to help</div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-sm text-muted-foreground">
          {credits.toLocaleString()} credits remaining
        </div>
        <ThemeToggle />
        <Button 
          variant="ghost" 
          size="icon" 
          title="Download" 
          onClick={onDownload}
        >
          📥
        </Button>
      </div>
    </header>
  );
}