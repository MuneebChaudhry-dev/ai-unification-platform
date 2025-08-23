import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  quote: string;
  rating: string;
  author: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Switched our team to AIUnify and cut content creation time by 60%.",
      rating: "★★★★★",
      author: "Senior PM"
    },
    {
      id: 2, 
      quote: "Switched our team to AIUnify and cut content creation time by 60%.",
      rating: "★★★★★",
      author: "Senior PM"
    },
    {
      id: 3,
      quote: "Switched our team to AIUnify and cut content creation time by 60%.",
      rating: "★★★★★", 
      author: "Senior PM"
    }
  ];

  return (
    <section className="container-max py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        What Our Users Say
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <p className="text-sm">"{testimonial.quote}"</p>
            <div className="mt-4 text-xs text-muted-foreground">
              {testimonial.rating} — {testimonial.author}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}