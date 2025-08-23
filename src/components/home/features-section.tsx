import { Card } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    "Text Generation",
    "Code Assistant", 
    "Image Generation",
    "Video Generation"
  ];

  return (
    <section id="features" className="container-max py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Powerful AI Services
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((title) => (
          <Card key={title}>
            <div className="size-10 rounded-md bg-brand/20 text-brand grid place-items-center mb-4">
              ★
            </div>
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">
              Create high-quality outputs with best-in-class models. Hover for glow.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}