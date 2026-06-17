# 🧠 AI Content Brief Generator — Streaming SEO Brief Builder

**AI Content Brief Generator** is a modern AI-powered web application that generates **structured SEO content briefs** with real-time streaming responses.

> ⚡ Built as a provider-agnostic AI workspace with production-ready architecture patterns.

---

## 🚀 Overview

Creating SEO briefs manually is slow, inconsistent, and repetitive.

This tool transforms a simple input:

* topic
* audience
* tone
* keywords

into a **fully structured, ready-to-use content brief** — generated in real time with AI.

---

## 🧠 Core Idea

Instead of:

> “Write content manually from scratch”

This app provides:

> “A complete, structured brief you can immediately execute”

---

## ✨ Key Features

### ⚡ AI-Generated SEO Briefs

* Generate structured content briefs instantly
* Includes:

  * title
  * search intent
  * keywords
  * outline
  * FAQs
  * CTA

---

### 🔄 Real-Time Streaming (SSE)

* Manual streaming parsing
* Token-by-token UI updates
* Improved perceived performance

---

### 🧩 Provider-Agnostic Architecture

Supports multiple AI providers:

* **Mock (Demo mode)** — no API required
* **Claude (Anthropic)**
* **OpenAI-compatible APIs** (OpenRouter, Gemini, etc.)

Switch providers without changing app logic.

---

### 🧪 Demo Mode (Unique Feature)

* Fully functional without API keys
* Simulates real AI streaming responses
* Perfect for:

  * demos
  * UI development
  * screenshots
  * testing

---

### 📄 Structured JSON Output

* Strict output contract enforced via prompt
* Parsed into typed objects
* Fallback handling for invalid responses

---

### 📑 PDF Export

* Export generated briefs to PDF
* Includes:

  * metadata
  * outline
  * FAQs
  * CTA
* Built with `jsPDF`

---

### 🎨 SaaS-Level UI/UX

* Glassmorphism design
* Gradient backgrounds
* Skeleton loading + shimmer
* Streaming cursor effect
* Clear system states (idle, loading, success, error)

---

### 🔐 Secure API Key Handling

* Stored only in React state
* Never persisted in:

  * localStorage
  * cookies
* Cleared on refresh

---

## 🏗 Architecture

### Frontend

* React 18
* TypeScript
* Vite
* Tailwind CSS

### AI Layer

* Claude API
* OpenAI-compatible APIs
* Custom provider abstraction

---

### 🔄 Data Flow

```
User Input → Prompt Builder → Provider Adapter → Streaming Response → Parser → UI
```

---

## 🔧 Key Engineering Decisions

### 1. Provider Abstraction Layer

```
src/services/providers/
```

* Each provider implements a common interface
* Easy to extend and maintain
* Clean separation from UI logic

---

### 2. Manual SSE Streaming Parsing

* Full control over streaming behavior
* Supports multiple provider formats
* Handles partial and malformed responses

---

### 3. Strict Output Contract

```json
{
  "title": "...",
  "meta": {...},
  "outline": [...],
  "faqs": [...]
}
```

* Predictable structure
* Type-safe parsing
* Reliable UI rendering

---

### 4. Prompt as a Module

```
src/prompts/contentBriefPrompt.ts
```

* Fully isolated prompt logic
* Easy iteration and testing
* Versionable

---

## 📂 Project Structure

```
src/
├── app/
├── components/
├── hooks/
├── lib/
├── prompts/
├── services/
│   └── providers/
└── types/
```

---

## 🧠 Why This Project Matters

This project demonstrates:

* Advanced frontend AI architecture
* Provider abstraction design
* Streaming UX patterns (SSE)
* Prompt engineering with structured outputs
* Production-ready UI/UX thinking
* SaaS product mindset

---

## 📸 Screenshots

### Empty State

![Empty](docs/screenshots/empty-state.png)

### Generating State

![Generating](docs/screenshots/generating-state.png)

### Generated Brief

![Result](docs/screenshots/generated-brief.png)

---

## 🔌 Supported Providers

### Mock (Demo Mode)

* No API key required
* Simulated streaming responses

---

### Claude (Anthropic)

Endpoint:

```
https://api.anthropic.com/v1/messages
```

---

### OpenAI-Compatible APIs

Examples:

* OpenAI
* OpenRouter
* Google Gemini (OpenAI-compatible mode)

---

## 🔐 API Key Handling

* Entered manually in UI
* Stored only in memory
* Never persisted
* Disabled in demo mode

---

## ⚠️ Limitations

* No backend (client-only architecture)
* API keys exposed in browser session
* No runtime schema validation
* Provider APIs may change

---

## 🏭 Production Recommendations

* Add backend / serverless proxy
* Move API keys to server
* Add rate limiting
* Add schema validation (Zod / Pydantic)
* Add automated tests

---

## 💡 Future Improvements

* Saved briefs & history
* Team collaboration
* Templates for different niches
* AI fine-tuned for SEO
* Integration with CMS (WordPress, Notion)
* Analytics (keyword density, SEO score)

---

## 📄 License

MIT License

---

## 👤 Author

**Vladimir**
AI Developer · Fullstack Builder
