// src/services/aiEngine.js

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const generateAIDescription = async (title, location, manualText) => {
  await delay(1200);
  const vibes = ["A precise curation of organic textures and high-tech minimalism.", "Engineered for deep focus, creative output, and restorative recovery cycles.", "A hyper-efficient architectural footprint offering profound spatial luxury."];
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


// ─── MEMORY-AWARE CONCIERGE ENGINE ──────────────────────────────────────────
// This function now automatically looks at the chat history so it doesn't get confused!
export const getConciergeResponse = (userInput, fullHistory = []) => {
  const text = userInput.toLowerCase().trim();
  
  // Find the very last thing the AI said to you on your screen
  const aiMessages = fullHistory.filter(m => m.role === 'ai');
  const lastAiText = aiMessages.length > 0 ? aiMessages[aiMessages.length - 1].text.toLowerCase() : "";

  // 1. MEMORY CHECK: If you reply "I don't like that" to something it just said
  if (
    text.includes("don't like") || 
    text.includes("dont like") || 
    text === "no" || 
    text.includes("not a fan") || 
    text.includes("something else")
  ) {
    if (lastAiText.includes("costa brava") || lastAiText.includes("pool") || lastAiText.includes("ocean")) {
      return "Got it—no beach vibes. Let's pivot away from the sun completely. How about something tucked deep into the mountains, like our isolated Nordic Glass Pavilions or a snowy retreat in Reykjavík?";
    }
    if (lastAiText.includes("glass") || lastAiText.includes("nordic") || lastAiText.includes("woods")) {
      return "Understood, skipping the glass cabins. If looking at trees isn't doing it for you, we could pivot to a clean, ultra-modern urban setup instead—like our Brutalist lofts in Berlin or Antwerp.";
    }
    return "No worries at all, let's scratch that suggestion off the list. Tell me what you're actually in the mood for right now—more quiet nature, or a sleek city space?";
  }

  // 2. STANDARD KEYWORD RESPONSES
  if (text === "hi" || text === "hello" || text === "hey") {
    return "Hello! Lovely to connect with you. How can I help you find the perfect space today?";
  }

  if (text.includes("wifi") || text.includes("internet") || text.includes("starlink")) {
    return "Oh, definitely. Reliable connectivity is an absolute priority here. Every single one of our 50 global properties is equipped with high-speed Starlink setups, so you'll be completely set for zero-lag remote work.";
  }

  if (text.includes("cheap") || text.includes("low") || text.includes("price") || text.includes("prices") || text.includes("cost")) {
    return "I can absolutely guide you through our baseline options. Our entry-level premium spaces start around $395 per night—primarily within our European urban minimalist nodes like the Berlin or Antwerp layouts.";
  }

  if (text.includes("glass") || text.includes("nordic") || text.includes("woods")) {
    return "The Glass Pavilions are stunning choices! We have several variations nestled directly into secluded Nordic forests. They're built with full thermal-insulated glass layers, so you get panoramic views of nature.";
  }
  
  if (text.includes("pool") || text.includes("ocean") || text.includes("beach") || text.includes("costa")) {
    return "If you're looking for sun and open water, our Linear Villas along the Costa Brava are incredible. They feature private panoramic pools right up against the ocean edge. Perfect if you're looking to unwind near the water.";
  }

  if (text.includes("thank") || text.includes("thanks")) {
    return "You're so welcome! Let me know if you need anything else mapped out.";
  }

  return `I'm tracking your inquiry about "${userInput}". Try looking for specific terms on the dashboard like 'wifi', 'sauna', 'brutalist', or 'Kyoto' and I can give you the breakdown!`;
};
