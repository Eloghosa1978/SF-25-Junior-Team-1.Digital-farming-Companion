import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyBnaX0KzgTwpoXlqutd9fHmGNzgVmM5DBQ";

// Initialize the Generative AI client with your API key
const genAI = new GoogleGenerativeAI(API_KEY);

async function main() {
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works",
    config: {
      temperature: 0.1,
    },
  });
  console.log(response.text);
}

await main();
