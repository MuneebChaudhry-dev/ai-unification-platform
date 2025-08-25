interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({ 
  title = "How can I help you today?",
  description = "Choose your AI services below and start a conversation."
}: EmptyStateProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="size-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">💬</span>
        </div>
        <h2 className="text-2xl font-semibold mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}