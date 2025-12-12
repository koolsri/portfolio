import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    // Ideally this comes from process.env.API_KEY.
    // For this specific environment, we assume it's available.
    const apiKey = import.meta.env.VITE_API_KEY;
    if (apiKey) {
      genAI = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY not found in environment variables.");
    }
  }
  return genAI;
};

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  const ai = getGenAI();
  if (!ai) {
    return "I'm sorry, my brain (API Key) is missing. Please check the configuration.";
  }

  try {
    // Construct a chat history formatted for the model
    // Note: This is a simplified stateless approach for the demo.
    // A more robust app would use ai.chats.create({ history: ... })

    // We will use generateContent with the system instruction and the user's latest message context
    // For a simple QA bot, single-turn with context is often sufficient, 
    // but let's try to maintain a bit of conversation flow by appending previous context.

    const conversationContext = history
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n');

    const fullPrompt = `
      ${conversationContext}
      User: ${newMessage}
      Assistant:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I didn't get a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I'm having trouble connecting to the cloud right now.";
  }
};