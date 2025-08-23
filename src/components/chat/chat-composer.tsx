"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
    <Card className="p-4">
      <div className="flex flex-wrap gap-4 text-sm">
        {serviceOptions.map(([label, key]) => (
          <label key={key} className="flex items-center gap-2 text-muted-foreground">
            <Checkbox
              checked={service[key]}
              onCheckedChange={(checked) => handleServiceChange(key, !!checked)}
            />
            {label}
          </label>
        ))}
      </div>
      
      <div className="mt-3 flex items-center gap-3">
        <Select value={selectedModel} onValueChange={setSelectedModel}>
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
          className="flex-1"
          placeholder="Message GPT-4..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        
        <Button variant="ghost" size="icon" title="Attach">
          📎
        </Button>
        
        <Button onClick={handleSend} size="icon" title="Send">
          ➤
        </Button>
      </div>
      
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>Estimated cost: 2–5 credits</span>
        <span>Remaining: {credits.toLocaleString()} credits</span>
      </div>
    </Card>
  );
}