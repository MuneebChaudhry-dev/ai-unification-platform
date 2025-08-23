import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-24 pb-16">
      <div className="container-max text-center">
        <Badge variant="success">
          <span className="size-2 rounded-full bg-success" />
          Live • Unified AI access
        </Badge>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Unify All AI Models in <span className="text-brand">One</span> Platform
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Access GPT, Claude, DALL·E, Midjourney and more through a single interface. Generate text, code, images and videos with credit-based pricing.
        </p>

        {/* Smart prompt input mock */}
        <Card className="mx-auto mt-8 max-w-2xl p-4">
          <div className="flex flex-wrap items-center gap-3 px-2">
            {[
              "Text",
              "Code", 
              "Image",
              "Video",
            ].map((l) => (
              <label key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Checkbox defaultChecked={l === "Text"} />
                {l}
              </label>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Select defaultValue="gpt4">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt4">GPT-4</SelectItem>
                <SelectItem value="claude3">Claude 3</SelectItem>
                <SelectItem value="gemini">Gemini Pro</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Write about how to unify AI models..."
              className="flex-1"
            />
            <Button size="icon">→</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}