const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const generateAIDescription = async (title, location, manualText) => {
  await delay(1800); // Simulate network latency
  
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
  await delay(1200);
  const baseTags = [
    'AI-Climate Control', 'Carbon Neutral', 'Circadian Array', 'Biometric Access',
    'High Density Node', 'Acoustic Shell', 'Thermal Massing', 'Ecosystem Integration',
    'Kinetic Furniture', 'Zero-Lag Network', 'Hydroponic Hub', 'Premium Fluidity'
  ];
  // Shuffle and slice to mimic organic generation
  return baseTags.sort(() => 0.5 - Math.random()).slice(0, 6);
};
