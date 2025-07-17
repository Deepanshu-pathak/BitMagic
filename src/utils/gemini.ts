import { GoogleGenAI } from "@google/genai";
import { hashString } from "../utils/hashString";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

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
        explanation,
        example,
        testCases,
      };
    } catch (error) {
      return {
        explanation: "Failed to parse Gemini output.",
        example: "",
        testCases: [],
      };
    }
  }
}

export async function evaluateExpressionWithAI(expression: string) {
  const prompt = `
 You're an expert at explaining bit manipulation to beginners.
Please analyze the following bitwise expression:

Expression: ${expression}

Return your response in strict JSON format with the following schema as reference:
{
  "title": "Simplified Explanation",
  "explanation": "Bitwise AND has higher precedence than XOR, so we evaluate 5 & 6 first, then XOR with 9.",
  "steps": [
    " 5 & 6 = 0101 & 0110 = 0100 (4)",
    " 4 ^ 9 = 0100 ^ 1001 = 1101 (13)"
  ],
  "output": (13) decimal output of the expression,
  "example": {
    "binaryExplanation": [
      "5 = 0101",
      "6 = 0110",
      "5 & 6 = 0100 = 4",
      "9 = 1001",
      "4 ^ 9 = 1101 = 13"
    ]
  }
}

Constraints:
- Respond **only with a valid JSON object**, no markdown or additional commentary.
- Keep the explanation **short**, use no more than 100 words.
- Use **clear binary** representations in steps or example.
- Provide only one example 

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

      const title =parsed.title??""
      const explanation = parsed.explanation ?? "";
      const steps = Array.isArray(parsed.steps)
        ? parsed.steps.map(
            (step: string, i: number) => `Step ${i + 1}: ${step}`
          )
        : [];
      const output= parsed.output??""
      const example = parsed.example ?? {}
      const binaryExplanation = Array.isArray(example.binaryExplanation)
    ? example.binaryExplanation
    : [];

      return {
        title,
        explanation,
        steps,
        output,
        binaryExplanation,
      };
    } catch (err) {
      return {
        title:"Error...",
        explanation:"Expression Evaluation Failed",
        steps:[],
        output:"",
        binaryExplanation:"",
      };
    }
  }
}
