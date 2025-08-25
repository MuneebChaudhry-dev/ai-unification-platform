import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "AIUnify has transformed how our team approaches content creation. The unified interface saves us hours every day.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp"
    },
    {
      id: 2, 
      quote: "The ability to switch between different AI models seamlessly is a game-changer for our development workflow.",
      author: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "StartupXYZ"
    },
    {
      id: 3,
      quote: "Finally, a platform that brings all the AI tools we need into one place. Our productivity has skyrocketed.",
      author: "Emily Watson",
      role: "Creative Director",
      company: "DesignStudio"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by teams worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say about AIUnify
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <p className="mb-6 text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}