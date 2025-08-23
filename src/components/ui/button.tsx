import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer focus-visible:border-brand active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-background shadow-[0_8px_24px_rgba(255,107,53,0.35)] hover:brightness-110 border border-transparent focus-visible:border-brand/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_8px_24px_rgba(239,68,68,0.25)] hover:brightness-110 border border-transparent focus-visible:border-destructive/80",
        outline:
          "border border-divider bg-transparent text-foreground/90 shadow-[0_4px_12px_rgba(255,255,255,0.05)] hover:bg-white/5 hover:text-foreground hover:border-divider/80 focus-visible:border-brand/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_4px_12px_rgba(42,42,43,0.3)] hover:bg-secondary/80 border border-transparent focus-visible:border-secondary/80",
        ghost:
          "border border-divider text-foreground/90 hover:bg-white/5 hover:text-foreground hover:border-divider/80 focus-visible:border-brand/50",
        link: 
          "text-brand underline-offset-4 hover:underline hover:brightness-110 border border-transparent",
        success:
          "bg-success text-background shadow-[0_8px_24px_rgba(16,185,129,0.25)] hover:brightness-110 border border-transparent focus-visible:border-success/80",
      },
      size: {
        default: "h-11 px-5 has-[>svg]:px-4",
        sm: "h-9 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-12 px-8 text-base has-[>svg]:px-6",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
