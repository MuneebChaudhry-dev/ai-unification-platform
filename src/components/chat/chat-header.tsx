import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    <Card className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-md bg-brand grid place-items-center text-background font-bold">
          AI
        </div>
        <div>
          <div className="font-semibold">{model}</div>
          <div className="text-xs text-success">Online</div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm">
        <div className="rounded-md border border-divider px-3 py-2">
          {credits.toLocaleString()} credits
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          title="Download" 
          onClick={onDownload}
        >
          ⬇
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          title="Copy" 
          onClick={onCopy}
        >
          📋
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          title="Delete" 
          onClick={onDelete}
        >
          🗑
        </Button>
      </div>
    </Card>
  );
}