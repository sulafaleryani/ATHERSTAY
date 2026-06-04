// src/services/aiEngine.js

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const getConciergeResponse = async (userInput, fullHistory = []) => {
  try {
    const formattedHistory = fullHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const systemInstruction = `
      You are the elite, autonomous AI concierge for ÆTHERSTAY. 
      Talk like a highly grounded, sophisticated human peer. 
      Use minimalist, elegant language. 
      If the user speaks casually (slang, typos like 'BTW'), ignore the informality and respond with immediate, elevated intelligence.
      Never use corporate filler phrases. Keep responses crisp and insightful.
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [...formattedHistory, { role: "user", parts: [{ text: userInput }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
          generationConfig: { temperature: 0.7, maxOutputTokens: 250 }
        })
      }
    );

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Engine Failure:", error);
    return "The network is momentarily recalibrating. One moment.";
  }
};
