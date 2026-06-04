// src/services/aiEngine.js

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Your original interactive metadata generator
export const generateAIDescription = async (title, location, manualText) => {
  await delay(1200); // Simulate network latency
  
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

// Your original tag generator
export const generateAITags = async (title, description) => {
  await delay(800);
  const baseTags = [
    'AI-Climate Control', 'Carbon Neutral', 'Circadian Array', 'Biometric Access',
    'High Density Node', 'Acoustic Shell', 'Thermal Massing', 'Ecosystem Integration',
    'Kinetic Furniture', 'Zero-Lag Network', 'Hydroponic Hub', 'Premium Fluidity'
  ];
  return baseTags.sort(() => 0.5 - Math.random()).slice(0, 4);
};

// Chat concierge routing engine
export const getConciergeResponse = (userInput) => {
  const text = userInput.toLowerCase().trim();

  if (text.includes("wifi") || text.includes("internet") || text.includes("connection")) {
    return "Confirmed. 100% of our 50 global properties are structurally mapped with symmetrical high-speed Starlink architecture. Signal guarantees are locked at check-in.";
  } 
  if (text.includes("cheap") || text.includes("low") || text.includes("price") || text.includes("prices")) {
    return "The baseline optimization for our urban locations begins at $395/night within our European sectors, maintaining complete premium specifications.";
  } 
  if (text.includes("glass") || text.includes("nordic")) {
    return "Filtering matrix for glass options. We currently feature several distinct Glass Pavilion variants across our Nordic nodes with structural thermal baselines.";
  }

  return "Analyzing data stream... Try asking specific architectural criteria like 'wifi', 'prices', or 'glass' to verify core system attributes.";
};
