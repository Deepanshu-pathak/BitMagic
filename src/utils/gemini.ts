import { GoogleGenAI } from "@google/genai";
import { hashString } from "../utils/hashString";

const apiKey = "AIzaSyAFT9X7olVgUsotLErV6OyqHMKMpMdzQ8M";
const genAI = new GoogleGenAI({ apiKey });

export async function explainBitTrick(trickCode: string) {
  const cacheKey = hashString(trickCode);

  // ✅ Check localStorage first
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {
      console.warn("Invalid cached response");
    }
  }
  const prompt = `
You are a programming assistant helping explain bit manipulation tricks to beginner to intermediate developers.
Your task is to analyze the following Python code snippet and return a clear, structured explanation in **valid JSON format**.
Please follow this **strict JSON schema**:
{
  "title": "string - short and clear name of the trick",
  "explanation": "string - concise and beginner-friendly explanation of what the trick does and how it works",
  "example": "string - a simple and clear example showing the trick in action (e.g., input/output and short explanation)",
  "testCases": [
    "string - a test case showing how the trick behaves",
    "string - another test case"
  ]
}

Important rules:
- Do not include code blocks like \`\`\`json or markdown syntax
- Do not wrap the JSON in quotes
- Do not include any text outside the JSON object
- Keep the explanation under 100 words and make it understandable by a beginner
- Make sure the JSON is valid and parsable

Trick code:
${trickCode}
`;

  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const result = response.text;
  if (result) {
    const cleaned = result.replace(/```json|```js|```/g, "").trim();

    try {
      const parsed = JSON.parse(cleaned);

      // ✅ Save to localStorage
      localStorage.setItem(cacheKey, JSON.stringify(parsed));

      // ✅ Normalize complex fields
      const explanation = parsed.explanation ?? "";
      const example = parsed.example ?? "";

      const testCases = Array.isArray(parsed.testCases)
        ? parsed.testCases.map((t: any, i: number) =>
            typeof t === "string"
              ? t
              : `Test ${i + 1}:\nInput: ${t.input}\nOutput: ${
                  t.output
                }\nExplanation: ${t.explanation}`
          )
        : [];

      return {
        title: parsed.title ?? "Untitled",
        explanation,
        example,
        testCases,
      };
    } catch (error) {
      console.error("Parsing failed:", error);
      return {
        title: "AI Error",
        explanation: "Failed to parse Gemini output.",
        example: "",
        testCases: [],
      };
    }
  }
}
