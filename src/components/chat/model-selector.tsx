"use client";

import { useState } from "react";
import { TaskType } from "./task-tabs";

interface ProviderGroup {
  id: string;
  name: string;
  icon: string;
  models: string[];
}

interface ModelSelectorProps {
  taskType: TaskType;
  selectedModel: string;
  onModelChange: (model: string) => void;
}

const modelsByTask: Record<TaskType, ProviderGroup[]> = {
  chat: [
    {
      id: "deepseek",
      name: "DeepSeek",
      icon: "🧠",
      models: ["deepseek/deepseek-chat-v3.1"]
    },
    {
      id: "openai",
      name: "OpenAI",
      icon: "🤖",
      models: [
        "openai/gpt-5-chat",
        "openai/gpt-5-mini",
        "openai/gpt-4.1-mini"
      ]
    },
    {
      id: "google",
      name: "Google",
      icon: "💎",
      models: [
        "google/gemini-2.5-flash-lite",
        "google/gemini-2.5-flash"
      ]
    },
    {
      id: "x-ai",
      name: "X.AI",
      icon: "❌",
      models: ["x-ai/grok-3-mini"]
    },
    {
      id: "anthropic",
      name: "Anthropic",
      icon: "🎭",
      models: ["anthropic/claude-sonnet-4"]
    }
  ],
  code: [
    {
      id: "openai",
      name: "OpenAI",
      icon: "🤖",
      models: [
        "openai/gpt-5",
        "openai/gpt-4.1",
        "openai/o3"
      ]
    },
    {
      id: "anthropic",
      name: "Anthropic",
      icon: "🎭",
      models: [
        "anthropic/claude-opus-4.1",
        "anthropic/claude-sonnet-4"
      ]
    },
    {
      id: "deepseek",
      name: "DeepSeek",
      icon: "🧠",
      models: ["deepseek/deepseek-chat-v3.1"]
    },
    {
      id: "x-ai",
      name: "X.AI",
      icon: "❌",
      models: [
        "x-ai/grok-4",
        "x-ai/grok-3"
      ]
    }
  ],
  image: [
    {
      id: "openai",
      name: "OpenAI",
      icon: "🤖",
      models: ["openai/gpt-5"]
    },
    {
      id: "anthropic",
      name: "Anthropic",
      icon: "🎭",
      models: ["anthropic/claude-opus-4.1"]
    }
  ],
  video: [],
  research: []
};

export function ModelSelector({ taskType, selectedModel, onModelChange }: ModelSelectorProps) {
  const [expandedModel, setExpandedModel] = useState<string | null>(null);
  const models = modelsByTask[taskType] || [];

  const handleProviderClick = (provider: ProviderGroup) => {
    if (provider.models.length > 1) {
      setExpandedModel(expandedModel === provider.id ? null : provider.id);
    } else {
      onModelChange(provider.models[0]);
      setExpandedModel(null);
    }
  };

  const handleModelClick = (modelName: string) => {
    onModelChange(modelName);
    setExpandedModel(null);
  };

  const getModelDisplayName = (fullModelName: string) => {
    const parts = fullModelName.split('/');
    return parts[1] || fullModelName;
  };

  const isModelSelected = (provider: ProviderGroup) => {
    return provider.models.some(model => selectedModel === model);
  };

  if (models.length === 0) {
    return (
      <div className="mb-6 animate-slide-in-bottom">
        <div className="text-sm text-muted-foreground mb-3">No models available for this task</div>
        <div className="text-xs text-muted-foreground bg-muted/20 rounded-lg p-3">
          Models for {taskType} are coming soon!
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 animate-slide-in-bottom">
      <div className="text-sm text-muted-foreground mb-3">Available Models</div>
      <div className="flex flex-wrap gap-2">
        {models.map((provider, index) => (
          <div key={provider.id} className="relative">
            <button
              onClick={() => handleProviderClick(provider)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 btn-press hover-lift
                animate-scale-in
                ${isModelSelected(provider)
                  ? 'bg-brand text-background shadow-lg scale-105' 
                  : 'bg-card border border-divider/60 text-foreground hover:bg-white/5 hover:border-brand/30'
                }
              `}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="text-lg transition-transform duration-200 hover:scale-110">{provider.icon}</span>
              <span>{provider.name}</span>
              {provider.models.length > 1 && (
                <span className={`ml-1 transition-transform duration-200 ${expandedModel === provider.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              )}
            </button>

            {/* Dropdown for models */}
            {expandedModel === provider.id && provider.models.length > 1 && (
              <div className="absolute top-full left-0 mt-1 bg-card border border-divider/60 rounded-lg shadow-lg backdrop-blur-md z-10 min-w-48 animate-scale-in">
                {provider.models.map((model, subIndex) => (
                  <button
                    key={model}
                    onClick={() => handleModelClick(model)}
                    className={`
                      block w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors
                      ${subIndex === 0 ? 'rounded-t-lg' : ''}
                      ${subIndex === provider.models.length - 1 ? 'rounded-b-lg' : 'border-b border-divider/30'}
                      ${selectedModel === model ? 'bg-brand/10 text-brand' : 'text-foreground'}
                    `}
                    style={{
                      animationDelay: `${subIndex * 0.05}s`
                    }}
                  >
                    {getModelDisplayName(model)}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}