# AI Content Brief Generator

A production-ready React + TypeScript + Vite app for generating structured SEO content briefs with Claude streaming responses.

## Features

- Topic, audience, tone, and keyword input
- Claude API streaming via SSE
- Manual parsing of `data:` chunks
- Structured JSON parsing with fallback warning
- Glassmorphism SaaS UI
- API key kept only in React state
- PDF export with jsPDF
- Loading skeleton and streaming cursor
- Strict TypeScript architecture

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v3
- Claude API
- jsPDF

## Project Structure

```txt
src/
├── app/
├── components/
├── hooks/
├── services/
├── prompts/
├── types/
├── lib/
└── styles/

```

Setup
npm install
npm run dev

Claude API
The app sends requests directly from the browser to:
https://api.anthropic.com/v1/messages

Required browser-access header:
anthropic-dangerous-direct-browser-access: true

The API key is entered manually in the top bar and stored only in React state.

Output Contract

Claude is instructed to return only valid JSON matching the ContentBrief TypeScript type.
No markdown.
No backticks.
No explanatory text outside JSON.

Limitations

No backend proxy
No localStorage
API key is lost after refresh
JSON shape is parsed but not deeply runtime-validated

Production Notes

For a real public deployment, route Claude requests through a backend or serverless function to avoid exposing API keys in the browser.
