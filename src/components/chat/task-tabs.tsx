"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

export type TaskType = "chat" | "image" | "video" | "research" | "code";

interface TaskTabsProps {
  activeTab: TaskType;
  onTabChange: (tab: TaskType) => void;
}

const tabs = [
  { id: "chat", label: "Chat", icon: "💬" },
  { id: "image", label: "Image Generation", icon: "🎨" },
  { id: "video", label: "Video Generation", icon: "🎬" },
  { id: "research", label: "Research", icon: "🔍" },
  { id: "code", label: "Code", icon: "💻" },
] as const;

export function TaskTabs({ activeTab, onTabChange }: TaskTabsProps) {
  return (
    <Card className="p-1 mb-6 animate-fade-in">
      <div className="flex gap-1">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TaskType)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 btn-press
              animate-slide-in-bottom hover-lift
              ${activeTab === tab.id 
                ? 'bg-brand text-background shadow-md scale-105' 
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }
            `}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <span className="text-lg transition-transform duration-200 hover:scale-110">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}