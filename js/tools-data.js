// An array with the featured tools.
// They are hard-coded for simplicity.

const TOOLS = [
  {
    id: 1,
    name: "ChatGPT",
    category: "writing",
    description: "Conversational AI for writing, coding, and analysis. Handles everything from essays to debugging code.",
    pricing: "freemium",
    url: "https://chat.openai.com",
    featured: true
  },
  {
    id: 2,
    name: "Midjourney",
    category: "image",
    description: "Generate high quality images from text prompts. Popular with designers and artists.",
    pricing: "paid",
    url: "https://www.midjourney.com",
    featured: true
  },
  {
    id: 3,
    name: "GitHub Copilot",
    category: "code",
    description: "AI pair programmer that suggests code in your editor. Supports most languages.",
    pricing: "paid",
    url: "https://github.com/features/copilot",
    featured: true
  },
  {
    id: 4,
    name: "ElevenLabs",
    category: "audio",
    description: "Realistic AI voice generation and cloning. Used for podcasts, videos, and accessibility.",
    pricing: "freemium",
    url: "https://elevenlabs.io",
    featured: false
  },
  {
    id: 5,
    name: "Runway",
    category: "video",
    description: "AI video generation and editing tools. Create videos from text or images.",
    pricing: "freemium",
    url: "https://runwayml.com",
    featured: true
  },
  {
    id: 6,
    name: "Perplexity",
    category: "research",
    description: "AI-powered search engine with cited sources. Great for academic and professional research.",
    pricing: "free",
    url: "https://www.perplexity.ai",
    featured: true
  },
  {
    id: 7,
    name: "Claude",
    category: "writing",
    description: "AI assistant for writing, analysis, and coding. Known for long-form content and reasoning.",
    pricing: "freemium",
    url: "https://claude.ai",
    featured: false
  },
  {
    id: 8,
    name: "DALL-E",
    category: "image",
    description: "OpenAI's image generator. Create and edit images using natural language descriptions.",
    pricing: "paid",
    url: "https://openai.com/dall-e-3",
    featured: false
  },
  {
    id: 9,
    name: "Cursor",
    category: "code",
    description: "AI-first code editor built on VS Code. Understands your entire codebase for smarter suggestions.",
    pricing: "freemium",
    url: "https://cursor.sh",
    featured: true
  },
  {
    id: 10,
    name: "Suno",
    category: "audio",
    description: "Generate full songs with vocals and instruments from a text prompt. No musical skills needed.",
    pricing: "freemium",
    url: "https://suno.com",
    featured: false
  },
  {
    id: 11,
    name: "Notebook LM",
    category: "research",
    description: "Google's AI research assistant. Upload documents and ask questions about them.",
    pricing: "free",
    url: "https://notebooklm.google.com",
    featured: false
  },
  {
    id: 12,
    name: "Kling",
    category: "video",
    description: "AI video generation from text and images. Produces cinematic quality short clips.",
    pricing: "freemium",
    url: "https://klingai.com",
    featured: false
  }
];