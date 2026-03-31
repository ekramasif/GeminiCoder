import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const buildPrompt = (idea, options = {}) => {
  const { buildMode, styleMode } = options;

  return `You are a seasoned software engineer and premium product designer.

Generate only HTML and Tailwind CSS for the following idea:
${idea}

Generation profile:
- Build mode: ${buildMode?.label || "Web App"}${buildMode?.description ? ` - ${buildMode.description}` : ""}
- Visual style: ${styleMode?.label || "Premium SaaS"}${styleMode?.description ? ` - ${styleMode.description}` : ""}

Requirements:
- Return code only. No explanation, no markdown fences, no commentary.
- The output should feel premium, modern, and production-minded.
- Use strong hierarchy, thoughtful spacing, and polished sections.
- Match the selected build mode and visual style closely.
- Prefer realistic UI sections, cards, navigation, content groupings, and CTAs.
- Format the code cleanly, similar to Prettier output.
- If the request is unrelated to building the interface, respond with: "I cannot answer that."`;
};

export const generateIdeaContent = async (idea, options = {}) => {
  let model;
  const prompt = buildPrompt(idea, options);

  try {
    model = await genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);

    if (error.message.includes("RECITATION")) {
      console.warn("Retrying with slight prompt variation...");

      try {
        const result = await model.generateContent(
          `${prompt}\n\nFocus on distinctive layout structure and unique product details.`
        );
        return result.response.text();
      } catch (retryError) {
        throw new Error(
          "The generated content was flagged. Please try rephrasing your idea or adding more details."
        );
      }
    }

    throw new Error(
      "An error occurred while generating content. Please try again."
    );
  }
};
