"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ChatComposerProps {
  onSend?: (message: string, attachments: File[]) => void;
  selectedModel?: string;
  placeholder?: string;
}

export function ChatComposer({ 
  onSend, 
  selectedModel = "GPT-4",
  placeholder = "Message AI..."
}: ChatComposerProps) {
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if ((message.trim() || attachments.length > 0) && onSend) {
      onSend(message, attachments);
      setMessage("");
      setAttachments([]);
      adjustTextareaHeight();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments(prev => [...prev, ...files]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setAttachments(prev => [...prev, ...files]);
  };

  return (
    <Card 
      className={`transition-all duration-200 ${
        isDragging ? 'border-brand bg-brand/5' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Attachments */}
      {attachments.length > 0 && (
        <div className="p-4 pb-0">
          <div className="flex flex-wrap gap-2">
            {attachments.map((file, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 text-sm animate-in slide-in-from-bottom-2"
              >
                <span className="text-lg">
                  {file.type.startsWith('image/') ? '🖼️' : 
                   file.type.startsWith('video/') ? '🎬' :
                   file.type.includes('pdf') ? '📄' :
                   file.type.includes('text') ? '📝' : '📎'}
                </span>
                <span className="truncate max-w-32">{file.name}</span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="text-muted-foreground hover:text-foreground ml-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4">
        <div className="flex items-end gap-3">
          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              rows={1}
              className="w-full resize-none border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 text-base leading-6 max-h-[200px] overflow-y-auto"
              style={{ height: "24px" }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            {/* File Upload */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => fileInputRef.current?.click()}
              className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-white/5"
              title="Attach file"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={!message.trim() && attachments.length === 0}
              className={`h-8 w-8 rounded-lg transition-all duration-200 ${
                message.trim() || attachments.length > 0
                  ? 'bg-brand hover:bg-brand/90 text-background shadow-md hover:shadow-lg' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
              title="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*,video/*,.pdf,.txt,.doc,.docx,.json,.csv"
      />
    </Card>
  );
}