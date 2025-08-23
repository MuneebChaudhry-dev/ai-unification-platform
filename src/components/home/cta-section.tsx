import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="container-max pb-24">
      <Card className="p-8 md:p-10 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Ready to Unify Your AI Workflow?
        </h3>
        <p className="text-muted-foreground mb-6">
          Start your free trial and explore text, code, image, and video generation in one place.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/chat">Start Free Trial</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link href="#pricing">View Pricing</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
}