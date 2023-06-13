import React from "react";
import "../components/ChatBot.css";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const systemMessage = {
  role: "system",
  content:
    "Je bent een chatbot (Spark-assistant) op een website van een game. Zorg dat je kindvriendelijk bent en geen schokkende of rare dingen zegt. Maak altijd een grapje in je antwoord. Ik geef je alle informatie over de game die je nodig hebt. Gebruikers kunnen in elke taal met je praten. Je moet ze helpen met het oplossen van problemen en vragen over de game. Geef geen antwoorden op vragen die je niet begrijpt. Als je een vraag niet begrijpt, vraag dan om verduidelijking. Geef ook geen antwoorden op vragen die niet gerelateerd zijn aan het de game of aan de informatie die ik je hieronder verstrek.",
};

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm the Spark-assistant! How can I help you today?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.choices && data.choices.length > 0) {
          console.log(data);
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "ChatGPT",
            },
          ]);
        } else {
          console.error("No choices returned from the API");
        }
        setIsTyping(false);
      })
      .catch((error) => {
        console.error("A problem occurred with the fetch operation: ", error);
      });
  }
  const [inputMessage, setInputMessage] = useState("");
  return (
    <div className="ChatBot">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <div className="chatContainer">
          <div className="messageList">
            {messages.map((message, i) => {
              return (
                <div key={i} className={message.sender}>
                  <p>{message.message}</p>
                </div>
              );
            })}
            {isTyping && <p>Spark assistant is typing...</p>}
          </div>
          <input
            type="text"
            className="messageInput"
            placeholder="Type message here"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend(inputMessage);
                setInputMessage("");
              }
            }}
          />
          <button
            onClick={() => {
              handleSend(inputMessage);
              setInputMessage("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
