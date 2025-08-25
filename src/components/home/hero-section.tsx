import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function HeroSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-max text-center">
        <Badge variant="secondary" className="mb-6">
          ✨ Access 100+ AI Models in One Place
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          The Complete AI Platform for
          <span className="text-brand block">Modern Teams</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Chat, create, and collaborate with the world's most advanced AI models. 
          From text generation to image creation, all in one unified workspace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" asChild>
            <Link href="/chat">Start Free Trial</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Join 50,000+ teams already using AIUnify
        </div>
      </div>
    </section>
  );
}