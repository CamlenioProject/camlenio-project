"use client";
import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import Lottie from "lottie-react";
import chatAnimation from "@/animations/Chat.json";

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

const validateName = (name: string) => name.length >= 2;

// --- AI helper ---
async function askCompanyAI(userMessage: string): Promise<string> {
  const res = await fetch("/api/chatbot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });
  const data = await res.json();
  console.log("Bot reply:", data.reply);
  return data.reply;
}

export default function AnimatedChatBot() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [messages, setMessages] = useState<
    { from: "bot" | "user" | "company"; text: string }[]
  >([{ from: "bot", text: "Hello 👋" }]);

  const [input, setInput] = useState("");
  const [step, setStep] = useState<
    "greeting" | "normal" | "name" | "email" | "phone" | "project" | "message"
  >("greeting");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userProject, setUserProject] = useState("");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // --- Handle send ---
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");

    // --- Greeting step ---
    if (step === "greeting") {
      if (["hello", "hi", "hey"].includes(trimmed.toLowerCase())) {
        setStep("normal");
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: "bot", text: "How can I help you today?" },
          ]);
        }, 500);
        return;
      } else {
        setStep("normal");
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: "bot", text: "How can I help you today?" },
          ]);
        }, 500);
        return;
      }
    }

    if (step === "normal") {
      if (
        trimmed.toLowerCase().includes("service") ||
        trimmed.toLowerCase().includes("offer") ||
        trimmed.toLowerCase().includes("question") ||
        trimmed.toLowerCase().includes("help") ||
        trimmed.toLowerCase().includes("what") ||
        trimmed.toLowerCase().includes("do you")
      ) {
        const reply = await askCompanyAI(trimmed);

        setMessages((prev) => [...prev, { from: "bot", text: reply }]);
        return;
      }

      // Explicitly start form flow
      if (
        trimmed.toLowerCase().includes("start") ||
        trimmed.toLowerCase().includes("project")
      ) {
        setStep("name");
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: "bot", text: "Can I have your Name?" },
          ]);
        }, 500);
        return;
      }

      // Default: AI mode
      const reply = await askCompanyAI(trimmed);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      return;
    }

    // --- Name step ---
    if (step === "name") {
      if (!validateName(trimmed)) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "❌ Please enter a valid name (at least 2 characters).",
          },
        ]);
        return;
      }
      setUserName(trimmed);
      setStep("email");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Thanks! Now please share your Email ID:" },
        ]);
      }, 500);
      return;
    }

    // --- Email step ---
    if (step === "email") {
      if (!validateEmail(trimmed)) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "❌ That doesn’t look like a valid email. Try again:",
          },
        ]);
        return;
      }
      setUserEmail(trimmed);
      setStep("phone");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Got it! Please provide your phone Number:" },
        ]);
      }, 500);
      return;
    }

    // --- Phone step ---
    if (step === "phone") {
      if (!validatePhone(trimmed)) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "❌ Please enter a valid phone number (10–15 digits).",
          },
        ]);
        return;
      }
      setUserPhone(trimmed);
      setStep("project");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Great! What type of project are you interested in?",
          },
        ]);
      }, 500);
      return;
    }

    // --- Project step ---
    if (step === "project") {
      if (!trimmed) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "❌ Please select a project type." },
        ]);
        return;
      }
      setUserProject(trimmed);
      setStep("message");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Perfect 👍 Lastly, please type your Message or Query:",
          },
        ]);
      }, 500);
      return;
    }

    // --- Message step ---
    if (step === "message") {
      setUserMessage(trimmed);
      setStep("normal");

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sending your info to our team..." },
      ]);

      try {
        await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const botMessage = { text: data.text, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    setMessages((prev) => [
      ...prev,
      { text: "Sorry, something went wrong. Please try again later.", sender: "bot" },
    ]);
  } finally {
    setLoading(false);
  }
};

  };

  return (
    <div
      ref={chatContainerRef}
      className="fixed bottom-10 right-0 z-50 flex flex-col items-end"
    >
      {open && (
        <div className="w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-orange-200">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-gray-100 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full w-9 h-9 flex items-center justify-center text-xl">
                💬
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Chat with us</span>
                <span className="text-xs opacity-80">
                  We typically reply within 24 hours
                </span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX className="text-lg" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto bg-orange-100 flex flex-col gap-3 max-h-[40vh] overscroll-contain touch-pan-y"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[78%] break-words whitespace-pre-wrap shadow-sm ${
                  msg.from === "bot"
                    ? "bg-orange-200 self-start text-gray-900"
                    : msg.from === "company"
                    ? "bg-orange-100 self-start border border-orange-100 text-gray-800"
                    : "bg-orange-500 self-end text-gray-100"
                }`}
                style={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2 border-t border-orange-200 bg-orange-100">
            {step === "project" ? (
              <>
                <select
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border-2 rounded-lg px-3 py-2 border-orange-500 text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">-- Select a project type --</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Game App Development</option>
                  <option>UI/UX Design</option>
                  <option>Idea Based Website Development</option>
                  <option>E-commerce Development</option>
                  <option>Others</option>
                </select>
                <button
                  onClick={handleSend}
                  disabled={!input}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  Next
                </button>
              </>
            ) : (
              <>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border-2 rounded-lg px-3 py-2 border-orange-500 text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  placeholder="Type a message..."
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  Send
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {!open && (
        <div className="relative">
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setOpen(true)}
                className="bg-transparent text-white p-4 rounded-full transition z-10"
                aria-label="Open chat"
              >
                <Lottie
                  animationData={chatAnimation}
                  loop
                  autoplay
                  className="w-16 lg:w-22 h-16 lg:h-22"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
