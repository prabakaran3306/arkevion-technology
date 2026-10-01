import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to Arkevion Technology. How may we assist today?",
    },
  ]);

  const getReply = (text) => {
    const q = text.toLowerCase();

    if (q.includes("hello") || q.includes("hi")) {
      return "Hello! 👋 Welcome to Arkevion Technology. How can I help you?";
    }

    if (q.includes("service")) {
      return "We provide Web Development, Full Stack Development, Mobile App Development, UI/UX Design, Digital Marketing and AI Automation.";
    }

    if (q.includes("about")) {
      return "Arkevion Technology builds modern websites, applications, automation systems and digital solutions.";
    }

    if (q.includes("internship")) {
      return "We offer internship opportunities in Web Development, Java, Full Stack Development, UI/UX and other technology domains.";
    }

    if (q.includes("contact")) {
      return "You can contact Arkevion Technology through WhatsApp or email. WhatsApp: +91 88387 49824.";
    }

    if (
      q.includes("price") ||
      q.includes("pricing") ||
      q.includes("quote")
    ) {
      return "For pricing and project quotations, please contact our team with your project requirements.";
    }

    if (q.includes("technology") || q.includes("stack")) {
      return "Our technology stack includes Java, React, JavaScript, HTML, CSS, Bootstrap, Node.js and modern web technologies.";
    }

    return "Thanks for your message! 😊 Please tell me more about your requirement.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getReply(userText),
        },
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* CHATBOT WINDOW */}
      {isOpen && (
        <div className="chatbot-box">

          {/* HEADER */}
          <div className="chatbot-header">
            <div className="bot-icon">🤖</div>

            <div>
              <strong>Arkevion Assistant</strong>
              <small>Official company chatbot</small>
            </div>

            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          {/* BODY */}
          <div className="chatbot-body">

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }
              >
                {message.text}
              </div>
            ))}

            <p className="quick-title">QUICK QUESTIONS</p>

            <div className="quick-questions">

              <button
                onClick={() =>
                  setInput("Tell me about Arkevion Technology")
                }
              >
                About Arkevion Technology
              </button>

              <button
                onClick={() =>
                  setInput("What services do you provide?")
                }
              >
                Our Services
              </button>

              <button
                onClick={() =>
                  setInput("Tell me about internship")
                }
              >
                Internship Domains
              </button>

              <button
                onClick={() =>
                  setInput("How can I contact you?")
                }
              >
                Contact Details
              </button>

            </div>
          </div>

          {/* INPUT */}
          <div className="chatbot-input">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Arkevion..."
            />

            <button onClick={sendMessage}>
              ➤
            </button>

          </div>
        </div>
      )}

      {/* CHATBOT BUTTON */}
      <button
        className="chatbot"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "❌" : "💬"} <span>CHATBOT</span>
      </button>
    </>
  );
}