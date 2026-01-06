
import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLaptopDiagnosis = async (symptoms: string, model: string): Promise<DiagnosisResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As a senior laptop repair expert with 35 years of experience specializing in Apple MacBooks and PC hardware, diagnose the following:
      Laptop Model: ${model}
      Reported Symptoms: ${symptoms}
      
      Provide a professional diagnosis including:
      1. A likely technical diagnosis.
      2. Estimated repair cost range in INR (₹).
      3. Estimated turnaround time.
      4. A confidence level (0-1).
      5. Key recommendations for the user.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          diagnosis: { type: Type.STRING },
          estimatedCost: { type: Type.STRING },
          repairTime: { type: Type.STRING },
          confidence: { type: Type.NUMBER },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["diagnosis", "estimatedCost", "repairTime", "confidence", "recommendations"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Diagnosis unavailable. Please contact our human experts.");
  }
};
