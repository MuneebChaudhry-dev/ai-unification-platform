# N8N Integration Guide

This guide explains how to set up n8n workflows to work with the AI Unification Platform.

## Setup Instructions

### 1. Create a Webhook Trigger in N8N

1. Open your n8n workflow editor
2. Add a new **Webhook** node as the trigger
3. Set the HTTP Method to `POST`
4. Set the path to `/webhook/ai-chat` (or your preferred path)
5. Enable "Respond to Webhook" if you want to return a response

### 2. Process the Request Data

Your webhook will receive the following data structure:

```json
{
  "model": "GPT-4o",
  "taskType": "chat",
  "message": "User's message here",
  "sessionId": "session_1703123456789_abc123def",
  "attachments": ["file1", "file2"] // Optional
}
```

### Session Management

Each chat conversation has a unique `sessionId` that:
- Is automatically generated when a user starts chatting
- Persists throughout the conversation
- Gets reset when the user clicks "New Chat"
- Allows you to maintain conversation context in your n8n workflows

### 3. Add AI Service Nodes

Based on the `taskType` and `model`, you can:

- **Chat**: Use OpenAI, Anthropic Claude, or other chat APIs
- **Image Generation**: Use DALL-E, Midjourney, or Stability AI
- **Video Generation**: Use Sora, Runway ML, or similar services  
- **Research**: Use search APIs, web scraping, or research tools
- **Code**: Use coding-specific AI models or tools

### 4. Return Response

Your workflow should return a JSON response in this format:

```json
{
  "success": true,
  "data": {
    "response": "AI generated response here",
    "model": "GPT-4o",
    "usage": {
      "tokens": 150,
      "cost": 0.003
    }
  }
}
```

For errors, return:

```json
{
  "success": false,
  "error": "Error message here"
}
```

## Example N8N Workflow

Here's a simple workflow structure:

1. **Webhook Trigger** - Receives the request
2. **Switch Node** - Routes based on `taskType`
3. **AI Service Nodes** - Different nodes for different tasks:
   - OpenAI node for chat
   - DALL-E node for images
   - HTTP Request nodes for other services
4. **Respond to Webhook** - Returns the formatted response

## Configuration in the App

1. Click the settings gear icon (⚙️) in the chat interface
2. Enter your n8n webhook URL (e.g., `http://localhost:5678/webhook/ai-chat`)
3. Test the connection
4. Save the settings

## Environment Variables

You can also set the webhook URL via environment variable:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=http://localhost:5678/webhook/ai-chat
```

## Advanced Features

### File Attachments

When users upload files, they're sent as FormData. In n8n, you can access them using the binary data feature.

### Model-Specific Routing

You can create different workflow branches based on the selected model:

```javascript
// In a Function node
if (items[0].json.model.includes('GPT')) {
  return [items]; // Route to OpenAI
} else if (items[0].json.model.includes('Claude')) {
  return [null, items]; // Route to Anthropic
}
```

### Task-Specific Processing

Different task types might need different processing:

- **Chat**: Direct message to AI
- **Image**: Add image generation prompts
- **Code**: Add code-specific context
- **Research**: Add web search capabilities

## Security Considerations

1. Use HTTPS for production webhooks
2. Add authentication if needed (API keys, basic auth)
3. Validate incoming data in your n8n workflow
4. Rate limit your endpoints
5. Don't expose sensitive data in responses

## Troubleshooting

### Connection Issues
- Check if n8n is running
- Verify the webhook URL is correct
- Check firewall settings
- Ensure the webhook path matches

### Response Issues
- Verify your workflow returns the correct JSON format
- Check n8n execution logs
- Ensure "Respond to Webhook" is enabled
- Check for JSON formatting errors

### Performance
- Keep workflows efficient
- Use async operations where possible
- Consider caching for frequently requested data
- Monitor n8n resource usage