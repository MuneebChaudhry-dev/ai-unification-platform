import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  name: string;
  price: string;
  badge?: string;
  cta: string;
  features: string[];
}

export function PricingSection() {
  const pricingTiers: PricingTier[] = [
    { 
      name: "Starter", 
      price: "$0", 
      cta: "Get Started",
      features: ["100 credits/month", "Basic models", "Community support"]
    },
    { 
      name: "Pro", 
      price: "$29", 
      badge: "Most Popular",
      cta: "Start Pro Trial",
      features: ["5,000 credits/month", "All models", "Priority support", "Team collaboration"]
    },
    { 
      name: "Team", 
      price: "$99", 
      cta: "Contact Sales",
      features: ["25,000 credits/month", "Advanced features", "Custom integrations", "Dedicated support"]
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for your team
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`p-8 relative ${tier.badge ? "border-brand shadow-lg scale-105" : ""}`}>
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  {tier.badge}
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-brand">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={tier.badge ? "default" : "outline"}>
                <Link href="/chat">{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}