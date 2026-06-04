// src/services/aiEngine.js

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Keep your original metadata generators exactly as they were
export const generateAIDescription = async (title, location, manualText) => {
  await delay(1200);
  const vibes = [
    "A precise curation of organic textures and high-tech minimalism.",
    "Engineered for deep focus, creative output, and restorative recovery cycles.",
    "A hyper-efficient architectural footprint offering profound spatial luxury."
  ];
  const elements = ["Spatial Audio Zoning", "Automated Circadian Lighting Grid", "Filtered HEPA Clean-Air Envelope"];
  return {
    title: `AI Optimized: ${title || 'Aether Sandbox'}`,
    description: `Synthesized Analysis for asset located in ${location || 'Global Node'}: ${manualText || 'Standard framework listing.'} This living module scores in the 99th percentile for spatial efficiency. Featuring an architecture that mirrors natural light patterns to mitigate travel fatigue.`,
    features: elements,
    vibe: vibes[Math.floor(Math.random() * vibes.length)]
  };
};

export const generateAITags = async (title, description) => {
  await delay(800);
  const baseTags = ['AI-Climate Control', 'Carbon Neutral', 'Circadian Array', 'Biometric Access', 'High Density Node', 'Acoustic Shell', 'Thermal Massing', 'Ecosystem Integration'];
  return baseTags.sort(() => 0.5 - Math.random()).slice(0, 4);
};


// ─── NEW FLUID CONCIERGE ENGINE ─────────────────────────────────────────────
// No more robotic copy-pasting. This mimics a natural, helpful conversation.
export const getConciergeResponse = (userInput) => {
  const text = userInput.toLowerCase().trim();

  // 1. Handle common greetings casually and warmly
  if (text === "hi" || text === "hello" || text === "hey" || text.includes("good morning") || text.includes("good evening")) {
    const greetings = [
      "Hello! Lovely to connect with you. How can I help you find the perfect space today?",
      "Hi there! Welcome back. What kind of architectural vibe or location are you looking to explore?",
      "Good morning! Our system is ready. How can I assist with your stay selection today?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // 2. Handle specific inquiries with natural, conversation-first framing
  if (text.includes("wifi") || text.includes("internet") || text.includes("starlink")) {
    return "Oh, definitely. Reliable connectivity is an absolute priority here. Every single one of our 50 global properties is equipped with high-speed Starlink setups, so you'll be completely set for zero-lag remote work or streaming, no matter how isolated the location is.";
  }

  if (text.includes("cheap") || text.includes("low") || text.includes("price") || text.includes("prices") || text.includes("cost")) {
    return "I can absolutely guide you through our baseline options. Our entry-level premium spaces start around $395 per night—primarily within our European urban minimalist nodes like the Berlin or Antwerp layouts. Let me know if you'd like me to help you filter down to those!";
  }

  if (text.includes("glass") || text.includes("nordic") || text.includes("woods")) {
    return "The Glass Pavilions are stunning choices! We have several variations nestled directly into secluded Nordic forests. They're built with full thermal-insulated glass layers, so you get panoramic views of the nature outside while remaining perfectly cozy.";
  }
  
  if (text.includes("pool") || text.includes("ocean") || text.includes("beach") || text.includes("costa")) {
    return "If you're looking for sun and open water, our Linear Villas along the Costa Brava are incredible. They feature private panoramic pools right up against the ocean edge. Perfect if you're looking to unwind near the water.";
  }

  if (text.includes("thank") || text.includes("thanks")) {
    return "You're so welcome! Let me know if you need anything else mapped out.";
  }

  // 3. Smart, non-robotic fallback fallback that actively tries to guide you based on what you typed
  return `I'm tracking your inquiry about "${userInput}". While I don't have a rigid response indexed for that exact phrase, try looking for structural definitions on the dashboard like 'wifi', 'sauna', 'brutalist', or 'Kyoto' and I can give you the breakdown!`;
};
