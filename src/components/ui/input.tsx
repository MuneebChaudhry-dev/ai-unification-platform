import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-lg border border-divider bg-transparent px-4 py-3 text-sm text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all outline-none",
        "placeholder:text-muted-foreground selection:bg-brand selection:text-background",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "focus-visible:border-brand/50 hover:border-divider/80",
        "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
