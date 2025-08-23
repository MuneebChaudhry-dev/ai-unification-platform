interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({ 
  title = "Start a conversation",
  description = "Choose your AI services and start creating amazing content."
}: EmptyStateProps) {
  return (
    <div className="flex-1 grid place-items-center text-center text-muted-foreground">
      <div>
        <div className="text-2xl font-semibold text-foreground mb-2">
          {title}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}