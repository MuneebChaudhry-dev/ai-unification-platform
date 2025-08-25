import { Card } from "@/components/ui/card";

export function MissionSection() {
  const stats = [
    { number: "100+", label: "AI Models" },
    { number: "50K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <section id="why" className="py-24">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why choose AIUnify?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're building the future of AI collaboration. One platform, unlimited possibilities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-brand text-xl">⚡</span>
                <div>
                  <h3 className="font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-muted-foreground">Get responses in seconds, not minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand text-xl">🔒</span>
                <div>
                  <h3 className="font-semibold mb-1">Secure & Private</h3>
                  <p className="text-muted-foreground">Your data stays private and secure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand text-xl">🎯</span>
                <div>
                  <h3 className="font-semibold mb-1">Always Improving</h3>
                  <p className="text-muted-foreground">Regular updates with the latest AI models</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <div className="text-3xl font-bold text-brand mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}