import type { BriefFormValues } from "./brief";

export type AiProvider = "mock" | "claude" | "openai-compatible";

export type AiProviderConfig = {
  provider: AiProvider;
  apiKey: string;
  endpoint: string;
  model: string;
};

export type StreamBriefParams = {
  config: AiProviderConfig;
  values: BriefFormValues;
  onText: (text: string) => void;
};
