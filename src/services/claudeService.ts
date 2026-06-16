import type { BriefFormValues } from "../types/brief";
import { createContentBriefPrompt } from "../prompts/contentBriefPrompt";

type StreamBriefParams = {
  apiKey: string;
  values: BriefFormValues;
  onText: (text: string) => void;
};

type ClaudeContentBlockDelta = {
  type: "content_block_delta";
  delta: {
    type: "text_delta";
    text: string;
  };
};

type ClaudeStreamEvent =
  | ClaudeContentBlockDelta
  | {
      type:
        | "message_start"
        | "content_block_start"
        | "content_block_stop"
        | "message_delta"
        | "message_stop"
        | "ping"
        | "error";
    };

export async function streamContentBrief({
  apiKey,
  values,
  onText,
}: StreamBriefParams): Promise<string> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      stream: true,
      messages: [
        {
          role: "user",
          content: createContentBriefPrompt(values),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Claude API request failed");
  }

  if (!response.body) {
    throw new Error("Streaming is not supported in this browser");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullText = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split("\n");

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (!trimmedLine.startsWith("data:")) {
        continue;
      }

      const data = trimmedLine.replace(/^data:\s*/, "");

      if (data === "[DONE]") {
        continue;
      }

      try {
        const event = JSON.parse(data) as ClaudeStreamEvent;

        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          fullText += event.delta.text;
          onText(event.delta.text);
        }
      } catch {
        // Ignore incomplete SSE lines. We'll improve this later if needed.
      }
    }
  }

  return fullText;
}
