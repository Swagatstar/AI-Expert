
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

export const getQuickHealthReport = async (model: string): Promise<{ commonIssues: string[], healthTip: string }> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on 35 years of laptop repair data, provide a quick health summary for the model: ${model}.
    List 3 common hardware failures for this specific model and 1 maintenance tip. 
    Keep it very concise for a floating widget view.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          commonIssues: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          healthTip: { type: Type.STRING }
        },
        required: ["commonIssues", "healthTip"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (error) {
    return {
      commonIssues: ["General wear and tear", "Dust accumulation", "Battery degradation"],
      healthTip: "Keep your vents clear and use a hard surface."
    };
  }
};
