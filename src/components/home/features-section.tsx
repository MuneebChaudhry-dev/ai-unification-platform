import { Card } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      title: "Chat with AI",
      description: "Engage with GPT-4, Claude, and other leading language models in natural conversation.",
      icon: "💬"
    },
    {
      title: "Generate Images", 
      description: "Create stunning visuals with DALL-E, Midjourney, and Stable Diffusion.",
      icon: "🎨"
    },
    {
      title: "Code Assistant",
      description: "Get help with coding, debugging, and technical documentation.",
      icon: "💻"
    },
    {
      title: "Video Creation",
      description: "Generate and edit videos using the latest AI video models.",
      icon: "🎬"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need in one platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access the world's most powerful AI models through a single, intuitive interface.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}