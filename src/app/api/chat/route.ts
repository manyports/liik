import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!process.env.GEMINI_KEY) {
    return new Response(
      JSON.stringify({ error: "GEMINI_KEY not configured" }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const model = new ChatGoogleGenerativeAI({
      modelName: "gemini-1.5-pro",
      maxOutputTokens: 2048,
      apiKey: process.env.GEMINI_KEY,
    });

    const message = new HumanMessage({
      content: `Ты профессиональный бухгалтер-ассистент. Ответь на вопрос: ${prompt}`
    });

    const res = await model.invoke([message]);

    return new Response(
      JSON.stringify({ text: res.content }), 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: "Ошибка обработки запроса", 
        details: error instanceof Error ? error.message : String(error)
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}