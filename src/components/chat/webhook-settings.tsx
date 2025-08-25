"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { n8nService } from "@/lib/n8n-service";

interface WebhookSettingsProps {
  onClose?: () => void;
}

export function WebhookSettings({ onClose }: WebhookSettingsProps) {
  const [webhookUrl, setWebhookUrl] = useState(n8nService.getWebhookUrl());
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{success: boolean; message: string} | null>(null);

  const handleSave = () => {
    n8nService.setWebhookUrl(webhookUrl);
    // You might want to save to localStorage or cookies for persistence
    localStorage.setItem('n8n_webhook_url', webhookUrl);
    if (onClose) onClose();
  };

  const handleTest = async () => {
    setIsTesting(true);
    setTestResult(null);

    try {
      const response = await n8nService.sendJsonRequest({
        model: "test",
        taskType: "test",
        message: "Test connection from AI Unification Platform"
      });

      setTestResult({
        success: response.success,
        message: response.success 
          ? "Connection successful!" 
          : response.error || "Connection failed"
      });
    } catch (error) {
      setTestResult({
        success: false,
        message: error instanceof Error ? error.message : "Connection test failed"
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">N8N Webhook Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure your n8n webhook URL to enable AI integrations.
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Webhook URL</label>
            <Input
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="http://localhost:5678/webhook/ai-chat"
              className="mt-1"
            />
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleTest} 
              variant="outline" 
              className="flex-1"
              disabled={isTesting || !webhookUrl}
            >
              {isTesting ? "Testing..." : "Test Connection"}
            </Button>
            <Button onClick={handleSave} className="flex-1">
              Save Settings
            </Button>
          </div>

          {testResult && (
            <div className={`p-3 rounded-lg text-sm ${
              testResult.success 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {testResult.message}
            </div>
          )}
        </div>

        <div className="text-xs text-muted-foreground space-y-2">
          <p><strong>Setup Instructions:</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Create a webhook trigger in your n8n workflow</li>
            <li>Set the webhook path (e.g., /webhook/ai-chat)</li>
            <li>Configure your workflow to process the request</li>
            <li>Return a JSON response with the format:
              <code className="block mt-1 p-2 bg-muted rounded text-xs">
                {JSON.stringify({
                  success: true,
                  data: {
                    response: "AI response here",
                    model: "model-name"
                  }
                }, null, 2)}
              </code>
            </li>
          </ol>
        </div>
      </div>
    </Card>
  );
}