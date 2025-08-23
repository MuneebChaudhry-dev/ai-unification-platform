"use client";
import { useState } from "react";

function SidebarItem({ title, subtitle, active = false }: { title: string; subtitle: string; active?: boolean }) {
  return (
    <button className={`w-full text-left px-3 py-3 rounded-lg border transition ${
      active ? "border-brand/60 bg-white/5" : "border-transparent hover:bg-white/5"
    }`}>
      <div className="text-sm font-medium text-foreground/90 truncate">{title}</div>
      <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
    </button>
  );
}

export default function ChatPage() {
  const [service, setService] = useState<{ text: boolean; code: boolean; image: boolean; video: boolean }>({
    text: true,
    code: false,
    image: false,
    video: false,
  });

  return (
    <div className="container-max pt-6 pb-10">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-3 card p-4 h-[70vh] md:h-[76vh] flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold">Chat History</div>
            <button className="btn-primary h-9 px-3">+ New Chat</button>
          </div>
          <div className="relative mb-3">
            <input className="w-full rounded-md border border-divider bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="Search" />
          </div>
          <div className="space-y-2 overflow-auto pr-1">
            <SidebarItem title="Image Generation" subtitle="Create a futuristic cityscape..." active />
            <SidebarItem title="Code Review" subtitle="Review my React component..." />
            <SidebarItem title="Content Writing" subtitle="Write a blog post about AI..." />
            <SidebarItem title="Video Script" subtitle="Create a promotional video..." />
          </div>
        </aside>

        {/* Main area */}
        <section className="col-span-12 md:col-span-9 lg:col-span-9 flex flex-col">
          {/* Header */}
          <div className="card p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-md bg-brand grid place-items-center text-background font-bold">AI</div>
              <div>
                <div className="font-semibold">GPT-4</div>
                <div className="text-xs text-success">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="rounded-md border border-divider px-3 py-2">1,247 credits</div>
              <button title="Download" className="btn-ghost h-9">⬇</button>
              <button title="Copy" className="btn-ghost h-9">📋</button>
              <button title="Delete" className="btn-ghost h-9">🗑</button>
            </div>
          </div>

          {/* Empty state */}
          <div className="flex-1 grid place-items-center text-center text-muted-foreground">
            <div>
              <div className="text-2xl font-semibold text-foreground mb-2">Start a conversation</div>
              <p>Choose your AI services and start creating amazing content.</p>
            </div>
          </div>

          {/* Composer */}
          <div className="card p-4">
            <div className="flex flex-wrap gap-4 text-sm">
              {([
                ["Text Generation", "text"],
                ["Code Generation", "code"],
                ["Image Generation", "image"],
                ["Video Generation", "video"],
              ] as const).map(([label, key]) => (
                <label key={key} className="flex items-center gap-2 text-muted-foreground">
                  <input
                    type="checkbox"
                    className="accent-brand"
                    checked={service[key]}
                    onChange={(e) => setService((s) => ({ ...s, [key]: e.target.checked }))}
                  />
                  {label}
                </label>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <select className="rounded-lg border border-divider bg-transparent px-3 py-2 text-sm text-foreground/90">
                <option className="text-black">GPT-4</option>
                <option className="text-black">Claude 3</option>
              </select>
              <input className="flex-1 rounded-lg border border-divider bg-transparent px-4 py-3 outline-none placeholder:text-muted-foreground" placeholder="Message GPT-4..." />
              <button className="btn-ghost h-11" title="Attach">📎</button>
              <button className="btn-primary h-11 px-4" title="Send">➤</button>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Estimated cost: 2–5 credits</span>
              <span>Remaining: 1,247 credits</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
