import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container-max py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-brand grid place-items-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-semibold text-foreground">AIUnify</span>
          </div>
          <p className="text-muted-foreground">
            The complete AI platform for modern teams. Chat, create, and collaborate with the world's most advanced AI models.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Product</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
            <li><Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link href="/chat" className="hover:text-foreground transition-colors">Get Started</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Company</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link href="/#why" className="hover:text-foreground transition-colors">About</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Support</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-max py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AIUnify. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
