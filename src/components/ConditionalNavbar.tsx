"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Don't show navbar on chat page
  if (pathname?.startsWith("/chat")) {
    return null;
  }
  
  return <Navbar />;
}