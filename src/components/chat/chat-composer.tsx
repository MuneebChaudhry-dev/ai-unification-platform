"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceState {
  text: boolean;
  code: boolean;
  image: boolean;
  video: boolean;
}

interface ChatComposerProps {
  onSend?: (message: string, services: ServiceState) => void;
  credits?: number;
}

export function ChatComposer({ onSend, credits = 1247 }: ChatComposerProps) {
  const [service, setService] = useState<ServiceState>({
    text: true,
    code: false,
    image: false,
    video: false,
  });
  
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt4");

  const serviceOptions = [
    ["Text Generation", "text"],
    ["Code Generation", "code"],
    ["Image Generation", "image"],
    ["Video Generation", "video"],
  ] as const;

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message, service);
      setMessage("");
    }
  };

  const handleServiceChange = (key: keyof ServiceState, checked: boolean) => {
    setService((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="border-t p-4 bg-background">
      <div className="flex flex-wrap gap-6 mb-4 text-sm">
        {serviceOptions.map(([label, key]) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={service[key]}
              onCheckedChange={(checked) => handleServiceChange(key, !!checked)}
            />
            <span className="text-sm">{label}</span>
          </label>
        ))}
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt4">GPT-4</SelectItem>
            <SelectItem value="claude3">Claude 3</SelectItem>
            <SelectItem value="gemini">Gemini Pro</SelectItem>
          </SelectContent>
        </Select>
        
        <Input
          className="flex-1"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        
        <Button onClick={handleSend} disabled={!message.trim()}>
          Send
        </Button>
      </div>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Estimated cost: 2–5 credits</span>
      </div>
    </div>
  );
}