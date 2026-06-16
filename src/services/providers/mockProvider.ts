import type { StreamBriefParams } from "../../types/ai";

const delay = (ms: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

export async function streamMockBrief({
  values,
  onText,
}: StreamBriefParams): Promise<string> {
  const keywords = values.keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  const brief = {
    title: `${values.topic} Content Brief`,
    meta: {
      topic: values.topic,
      audience: values.audience,
      tone: values.tone,
      keywords,
    },
    searchIntent:
      "The user wants practical, trustworthy guidance that helps them understand the topic and take the next step with confidence.",
    angle:
      "Position the article as a clear, actionable guide with examples, decision criteria, and practical recommendations.",
    keywords:
      keywords.length > 0
        ? keywords
        : ["content strategy", "SEO brief", "AI content planning"],
    outline: [
      {
        heading: "Introduction",
        points: [
          "Define the topic in simple language.",
          "Explain why it matters to the target audience.",
          "Preview the main value of the article.",
        ],
      },
      {
        heading: "Key Challenges",
        points: [
          "Describe the most common pain points.",
          "Explain what readers often misunderstand.",
          "Show what is at stake if they ignore the topic.",
        ],
      },
      {
        heading: "Recommended Approach",
        points: [
          "Break the solution into clear steps.",
          "Include practical examples.",
          "Mention tools, workflows, or frameworks where useful.",
        ],
      },
      {
        heading: "Conclusion",
        points: [
          "Summarize the key takeaway.",
          "Reinforce the recommended next step.",
        ],
      },
    ],
    faqs: [
      `What should ${values.audience} know about ${values.topic}?`,
      `How can ${values.topic} improve content performance?`,
      `What is the best first step for getting started?`,
    ],
    callToAction:
      "Use this brief as a planning foundation, then turn each outline section into a focused draft with clear examples.",
  };

  const json = JSON.stringify(brief, null, 2);
  let fullText = "";

  for (const char of json) {
    fullText += char;
    onText(char);
    await delay(4);
  }

  return fullText;
}
