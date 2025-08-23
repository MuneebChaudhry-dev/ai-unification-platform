"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-transparent/50 border-b border-divider/40">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-gradient-to-br from-brand/90 to-brand-500/80 grid place-items-center shadow-[0_0_20px_rgba(255,107,53,.4)]">
            <span className="text-background font-bold text-xs">AI</span>
          </div>
          <span className="font-semibold tracking-tight">AIUnify</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-foreground transition-colors ${
                pathname === l.href ? "text-foreground" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="hidden sm:inline-flex h-9 items-center rounded-lg bg-brand px-4 font-medium text-background shadow-[0_8px_24px_rgba(255,107,53,.35)] hover:brightness-110 active:scale-[0.98] transition"
          >
            Enroll now for $499
          </Link>
          <Link
            href="/chat"
            className="sm:hidden inline-flex h-9 items-center rounded-lg bg-brand px-3 font-medium text-background"
          >
            $499
          </Link>
        </div>
      </div>
    </header>
  );
}
