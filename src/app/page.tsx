import Link from "next/link";
import Footer from "@/components/Footer";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-divider/70 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="text-foreground">
      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-16">
        <div className="container-max text-center">
          <Badge>
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
          <div className="mx-auto mt-8 max-w-2xl card p-4">
            <div className="flex flex-wrap items-center gap-3 px-2">
              {[
                "Text",
                "Code",
                "Image",
                "Video",
              ].map((l) => (
                <label key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" defaultChecked={l === "Text"} className="accent-brand" />
                  {l}
                </label>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <select className="rounded-lg border border-divider bg-transparent px-3 py-2 text-sm text-foreground/90">
                <option className="text-black">GPT-4</option>
                <option className="text-black">Claude 3</option>
              </select>
              <input
                placeholder="Write about how to unify AI models..."
                className="flex-1 rounded-lg border border-divider bg-transparent px-4 py-3 outline-none placeholder:text-muted-foreground"
              />
              <button className="btn-primary">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-max py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Powerful AI Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Text Generation", "Code Assistant", "Image Generation", "Video Generation"].map((title, idx) => (
            <Card key={title}>
              <div className="size-10 rounded-md bg-brand/20 text-brand grid place-items-center mb-4">★</div>
              <h3 className="font-medium mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">Create high-quality outputs with best-in-class models. Hover for glow.</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white/[.02] border-y border-divider/40 py-16 md:py-24">
        <div className="container-max">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Simple Credit-Based Pricing</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Free", price: "$0", badge: "", cta: "Get Started" },
              { name: "Basic", price: "$29", badge: "", cta: "Choose Basic" },
              { name: "Pro", price: "$99", badge: "Most Popular", cta: "Choose Pro" },
              { name: "Pro Max", price: "$299", badge: "", cta: "Choose Pro Max" },
            ].map((p) => (
              <Card key={p.name} className={`${p.badge ? "ring-1 ring-brand" : ""}`}>
                {p.badge && (
                  <span className="mb-3 inline-block rounded-full bg-brand/20 text-brand px-2 py-1 text-xs">{p.badge}</span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-3xl font-bold mt-2">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Credits included</li>
                  <li>Access to multiple models</li>
                  <li>Email support</li>
                </ul>
                <Link href="/chat" className="btn-primary mt-6 w-full text-center">{p.cta}</Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container-max py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">What Our Users Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <p className="text-sm">“Switched our team to AIUnify and cut content creation time by 60%.”</p>
              <div className="mt-4 text-xs text-muted-foreground">★★★★★  — Senior PM</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section id="why" className="container-max py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">We believe in frictionless creation across models through a unified, delightful interface.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["Innovation", "Accessibility", "Reliability"].map((k) => (
              <Card key={k} className="text-center py-6">
                <div className="size-8 mx-auto rounded-md bg-brand/20 text-brand grid place-items-center mb-2">✦</div>
                <div className="text-sm font-medium">{k}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-max pb-24">
        <div className="card p-8 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Ready to Unify Your AI Workflow?</h3>
          <p className="text-muted-foreground mb-6">Start your free trial and explore text, code, image, and video generation in one place.</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/chat" className="btn-primary">Start Free Trial</Link>
            <Link href="#pricing" className="btn-ghost">View Pricing</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
