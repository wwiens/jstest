// generate-tests.js
const fs = require('fs');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateTest() {
  // 1. Read the code you want to test
  const codeContent = fs.readFileSync('./math.js', 'utf8');

  // 2. Ask AI to write a Jest test for it
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini", // Fast and cheap model
    messages: [
      {
        role: "system",
        content: "You are a senior QA engineer. Write a Jest test suite for the following code. Output ONLY the raw JavaScript code. Do not use markdown blocks."
      },
      {
        role: "user",
        content: codeContent
      }
    ],
  });

  const testCode = response.choices[0].message.content;

  // 3. Write the result to a new file
  fs.writeFileSync('./math.test.js', testCode);
  console.log("Test file generated: math.test.js");
}

generateTest();