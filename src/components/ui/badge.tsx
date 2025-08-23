import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none transition-all overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-divider/70 bg-white/5 text-muted-foreground hover:bg-white/10 hover:border-divider",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-[0_4px_12px_rgba(239,68,68,0.2)]",
        outline: 
          "border-divider text-foreground hover:bg-white/5 hover:border-divider/80",
        success: 
          "border-success/20 bg-success/10 text-success hover:bg-success/20 shadow-[0_4px_12px_rgba(16,185,129,0.15)]",
        brand:
          "border-brand/20 bg-brand/10 text-brand hover:bg-brand/20 shadow-[0_4px_12px_rgba(255,107,53,0.15)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
