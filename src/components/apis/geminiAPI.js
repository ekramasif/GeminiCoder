import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const generateIdeaContent = async (idea) => {
  // Define the model outside the try block for broader scope
  let model;

  try {
    // Initialize the model
    model = await genAI.getGenerativeModel({ model: "gemini-pro" });

    // Enhanced prompt to act as a software engineer
    const prompt = `You are a seasoned software engineer. Please provide the only HTML and Tailwind CSS code for the following idea: ${idea}. 

    **Important Notes:**
    * Code will be formatted in like prettier
    * If the question is irrelevant or does not pertain to the provided idea, respond with: "I cannot answer that."
    * No explanation will be needed, just code.`;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);

    // If RECITATION error occurs, retry with a slightly modified prompt
    if (error.message.includes("RECITATION")) {
      console.warn("Retrying with slight prompt variation...");
      try {
        const result = await model.generateContent(
          `${idea} (Describe its unique features)`
        );
        return result.response.text();
      } catch (retryError) {
        throw new Error(
          "The generated content was flagged. Please try rephrasing your idea or adding more details."
        );
      }
    } else {
      throw new Error(
        "An error occurred while generating content. Please try again."
      );
    }
  }
};
