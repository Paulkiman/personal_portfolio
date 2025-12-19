
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeFinancialSms = async (smsText: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Parse the following MPESA or Bank SMS and extract transaction details. 
      SMS: "${smsText}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            amount: { type: Type.NUMBER, description: "The transaction amount" },
            currency: { type: Type.STRING, description: "Currency (e.g., KES)" },
            type: { type: Type.STRING, description: "Income or Expense" },
            category: { type: Type.STRING, description: "Category like Food, Transport, Rent, Salary" },
            merchant: { type: Type.STRING, description: "Who the money was sent to or received from" },
            date: { type: Type.STRING, description: "The date of transaction" }
          },
          required: ["amount", "type", "category"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Analysis failed:", error);
    return null;
  }
};
