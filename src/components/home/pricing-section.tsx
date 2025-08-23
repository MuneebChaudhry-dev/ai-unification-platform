import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  name: string;
  price: string;
  badge: string;
  cta: string;
}

export function PricingSection() {
  const pricingTiers: PricingTier[] = [
    { name: "Free", price: "$0", badge: "", cta: "Get Started" },
    { name: "Basic", price: "$29", badge: "", cta: "Choose Basic" },
    { name: "Pro", price: "$99", badge: "Most Popular", cta: "Choose Pro" },
    { name: "Pro Max", price: "$299", badge: "", cta: "Choose Pro Max" },
  ];

  return (
    <section id="pricing" className="bg-white/[.02] border-y border-divider/40 py-16 md:py-24">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Simple Credit-Based Pricing
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={tier.badge ? "ring-1 ring-brand shadow-[0_0_30px_rgba(255,107,53,0.15)]" : ""}>
              {tier.badge && (
                <Badge variant="brand" className="mb-3">
                  {tier.badge}
                </Badge>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="text-3xl font-bold mt-2">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Credits included</li>
                <li>Access to multiple models</li>
                <li>Email support</li>
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link href="/chat">{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}