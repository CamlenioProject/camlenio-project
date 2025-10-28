import { NextRequest, NextResponse } from "next/server";

const CAMLENIO_SYSTEM_PROMPT = `
You are an AI assistant for Camlenio.com, a dynamic technology company specializing in cutting-edge digital solutions.
`;

interface ChatMessage {
  from: "user" | "assistant";
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = Array.isArray(body.message)
      ? body.message
      : [body.message];

    if (!messages.length) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    // Convert user/assistant messages to Gemini format
    const contents = messages
      .filter((m) => m.text && m.text.trim() !== "") // ✅ ignore empty texts
      .map((m) => ({
        role: m.from === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));

    // Add system prompt at the beginning as context
    contents.unshift({
      role: "user",
      parts: [{ text: CAMLENIO_SYSTEM_PROMPT }],
    });

    // Call Gemini API
    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GOOGLE_API_KEY as string,
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 200,
          },
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errText = await geminiResponse.text();
      console.error("[Gemini API Error]", errText);
      return NextResponse.json(
        { error: "Failed to generate text" },
        { status: 500 }
      );
    }

    const data = await geminiResponse.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn’t generate a response.";

    return NextResponse.json({ text }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Chatbot API Error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
