import { useState } from "react";

/**
 * Chat page component that allows users to send messages and receive AI responses.
 */
export default function ChatPage() {
  const [input, setInput] = useState(""); // User input
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]); // Chat history

  /**
   * Handles sending a message to the ChatGPT API via our backend.
   */
  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent empty messages

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]); // Add user message to chat history

    try {
      // Send request to our backend API
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { role: "assistant", content: data.response };
      setMessages([...messages, userMessage, botMessage]); // Update chat history
    } catch (error) {
      console.error("Chat error:", error);
    }

    setInput(""); // Clear input field
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Chat Message Container */}
      <div className="mb-4 border rounded p-3 h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}>
            {msg.content}
          </p>
        ))}
      </div>

      {/* Input Field */}
      <input
        className="w-full border p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />

      {/* Send Button */}
      <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
