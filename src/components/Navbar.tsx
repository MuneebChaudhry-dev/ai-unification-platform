"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#why", label: "Why us" },
  { href: "/#faqs", label: "FAQs" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-max h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-brand grid place-items-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-semibold text-lg">AIUnify</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-foreground ${
                pathname === l.href ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/chat"
            className="hidden sm:inline-flex h-9 items-center rounded-lg bg-brand px-4 font-medium text-white hover:bg-brand/90 transition-colors"
          >
            Get Started
          >
          </Link>
        </div>
      </div>
    </header>
  );
}
