// Instructions that tell the AI how to behave (same as before)
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Read the key from your .env file
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    // Send the request to Groq's address
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`, // your key goes here, automatically
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b", // if you hit limits, try "llama-3.1-8b-instant"
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
          ],
        }),
      },
    );

    // If Groq says no (wrong key, limit reached), show the real reason
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();
    // The recipe text lives here in Groq's reply
    return data.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
