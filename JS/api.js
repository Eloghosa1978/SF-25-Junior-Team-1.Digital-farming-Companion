// import OpenAI from "openai";
// const client = new OpenAI();

// const response = await client.responses.create({
//   model: "gpt-4.1",
//   input: "Write a one-sentence bedtime story about a unicorn.",
// });

// console.log(response.output_text);

console.log("This is a test message to ensure the code runs corectly.");
fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "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",
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "How do I grow tomatoes in a small garden?" },
    ],
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data.choices[0].message.content);
  });
