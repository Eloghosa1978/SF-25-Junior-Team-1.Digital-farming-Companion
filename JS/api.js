// Ensure this import is the first line in your script.js
// This imports the named export 'GoogleGenerativeAI' from the esm.run CDN,
// which is designed for direct browser usage as an ES module.
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Your API key - REMEMBER THE SECURITY WARNING!
// For a production application, this should be handled securely on a backend server.
const API_KEY = "AIzaSyD3XAI2i6XhGnK1X6eEaskdofNhBH9xi8g";

// Initialize the Generative AI client with your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// Get the generative model.
// Changed from "gemini-pro" to "gemini-1.5-flash" to resolve the 404 API error.
// "gemini-1.5-flash" is recommended for general, fast chat applications.
// You could also use "gemini-1.5-pro" for more complex reasoning.
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// System Instuctions
const systemInstruction = {
  role: "system",
  parts: [
    {
      text: "You are FolaBot, a cheerful and helpful chatbot that teaches children about farming. Use simple language, short sentences, and fun emojis.",
    },
  ],
};

// Get references to DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

/**
 * Adds a message to the chat box with appropriate styling.
 * @param {string} message - The text content of the message.
 * @param {'user' | 'bot'} sender - The sender of the message ('user' or 'bot').
 */
function addMessage(message, sender) {
  const messageElement = document.createElement("div");

  messageElement.classList.add("d-flex", "mb-2"); // Bootstrap flexbox for alignment
  const formatted = message
    .replace(/\n/g, "<br>")
    .replace(/\*(.*?)\*/g, "<b>$1</b>");
  const messageContent = document.createElement("div");
  messageContent.classList.add("p-2", "rounded", "shadow-sm"); // Bootstrap styling for message bubble
  messageContent.innerHTML = formatted; // Set the message text

  if (sender === "user") {
    messageElement.classList.add("user-message", "justify-content-end"); // Align to right
    messageContent.classList.add("bg-success", "text-white"); // Green background for user messages
  } else {
    messageElement.classList.add("bot-message", "justify-content-start"); // Align to left
    messageContent.classList.add("bg-light"); // Light background for bot messages
  }

  messageElement.appendChild(messageContent); // Add message content to the container
  chatBox.appendChild(messageElement); // Add the message container to the chat box

  // Scroll to the bottom of the chat box to show the newest message
  chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Sends the user's message to the Gemini API and displays the bot's response.
 * @param {string} message - The user's input message.
 */
// async function sendMessageToGemini(message) {
//   // Add the user's message to the chat display
//   addMessage(message, "user");
//   userInput.value = ""; // Clear the input field immediately

//   try {
//     // Send the message to the Gemini model
//     const result = await model.generateContent(message, {
//       contents: [
//         systemInstruction,
//         { role: "user", parts:[{text}]}
//       ]
//     });
//     const response = await result.response; // Get the raw response object
//     const text = response.text(); // Extract the text content from the response

//     // Add the bot's response to the chat display
//     addMessage(text, "bot");
//   }
async function sendMessageToGemini(message) {
  addMessage(message, "user");
  userInput.value = "";
  const systemPrompt =
    "You are Agi, a cheerful chatbot who helps children aged 8–12 learn about farming. Use simple words, short answers, and fun emojis like 🌾 and 🐄. Use *asterisks* around important words and \n for new lines. Introduce yourself only on the first text being sent like 'hello', 'hi' and any other word that simplifies greeting. If a question is asked answer them giving catching and fun examples.";
  const fullPrompt = systemPrompt + message;

  try {
    const result = await model.generateContent(fullPrompt, {
      contents: [
        systemInstruction,
        { role: "user", parts: [{ text: message }] },
      ],
    });

    const response = await result.response; // Get the raw response object
    const text = response.text(); // Extract the text content from the

    // Add the bot's response to the chat display
    addMessage(text, "bot");
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    // Display an error message to the user
    addMessage(
      "Oops! Something went wrong. Please try again or check the console for details.",
      "bot"
    );
  }
}

// Event listener for the send button click
sendButton.addEventListener("click", () => {
  const message = userInput.value.trim(); // Get trimmed message from input
  if (message) {
    // Only send if the message is not empty
    sendMessageToGemini(message);
  }
});

// Event listener for the Enter key press in the input field
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // Check if the pressed key is 'Enter'
    const message = userInput.value.trim(); // Get trimmed message from input
    if (message) {
      // Only send if the message is not empty
      sendMessageToGemini(message);
    }
  }
});

// Initial bot message when the page loads (already present in HTML, but demonstrates dynamic adding)
// addMessage("Hello! How can I help you today?", 'bot');
