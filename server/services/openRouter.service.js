import axios from "axios";

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    console.log("Sending request to OpenRouter...");
    console.log("Messages:", messages);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",
        messages: messages,
        max_tokens: 1000
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("OpenRouter response:", response.data);

    const content = response?.data?.choices?.[0]?.message?.content;

    if (!content || !content.trim()) {
      console.error("EMPTY AI RESPONSE:", response.data);
      throw new Error("AI returned empty response.");
    }

    return content;

  } catch (error) {
    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.error?.message ||
      error.message ||
      "OpenRouter API Error"
    );
  }
};