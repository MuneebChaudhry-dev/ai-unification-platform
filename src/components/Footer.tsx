import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider/50 mt-24">
      <div className="container-max py-10 grid gap-8 md:grid-cols-4 text-sm text-muted-foreground">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-brand grid place-items-center">
              <span className="text-background font-bold text-xs">AI</span>
            </div>
            <span className="font-semibold text-foreground">AIUnify</span>
          </div>
          <p>Unifying text, code, image and video AI in one platform.</p>
          <p className="text-xs">© {new Date().getFullYear()} AIUnify. All rights reserved.</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Product</h4>
          <ul className="space-y-1">
            <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link href="/#features" className="hover:text-foreground">Features</Link></li>
            <li><Link href="/chat" className="hover:text-foreground">Chat</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/#why" className="hover:text-foreground">Why us</Link></li>
            <li><Link href="/#faqs" className="hover:text-foreground">FAQs</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Status</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
