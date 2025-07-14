const openai = require('../config/openaiConfig')

const generatEmbedding = async (text) => {

    const response = await openai.createEmbedding({
        model: 'text-embedding-ada-002',
        input: text
    });

    //console.log(response.data.data[0].embedding);

    return response.data.data[0].embedding;
}
module.exports = { generatEmbedding }

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({AIzaSyChIg1smwMM6l6i-otWrLt26P79bET2S3M});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();