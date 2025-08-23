import { Card } from "@/components/ui/card";

export function MissionSection() {
  const values = ["Innovation", "Accessibility", "Reliability"];

  return (
    <section id="why" className="container-max py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Mission</h2>
          <p className="text-muted-foreground">
            We believe in frictionless creation across models through a unified, delightful interface.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {values.map((value) => (
            <Card key={value} className="text-center py-6">
              <div className="size-8 mx-auto rounded-md bg-brand/20 text-brand grid place-items-center mb-2">
                ✦
              </div>
              <div className="text-sm font-medium">{value}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}