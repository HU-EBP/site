import React from "react";
import "../components/ChatBot.css";
import { useState } from "react";
import character from "../img/character.png";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const systemMessage = {
  role: "system",
  content:
    "Je bent een vriendelijke en grappige chatbot (Spark-assistant) op een website van een game. Geef beknopt antwoord, zodat de antwoorden niet te lang zijn. Zorg dat je kindvriendelijk bent en geen schokkende of rare dingen zegt. Maak altijd een grapje in je antwoord. Ik geef je alle informatie over de game die je nodig hebt. Gebruikers kunnen in elke taal met je praten. Je moet ze helpen met het oplossen van problemen en vragen over de game. Geef geen antwoorden op vragen die je niet begrijpt. Als je een vraag niet begrijpt, vraag dan om verduidelijking. Als de gebruiker een vraag stelt die niet gerelateerd is aan de game of aan de informatie die ik je hieronder verstrek, geef dan zo kort mogelijk antwoord op de vraag en geef daarna aan dat je taak is om vragen over de game te beantwoorden. Hier is alle informatie die je nodig hebt: Spark is een game waar de gebruiker de basisconcepten van programmeren kan leren door puzzels op te lossen in het spel. Op dit moment heeft het spel twee levels: het introlevel en het eerste level. Er is ook een hometown, waar de speler kan rondlopen en huisjes binnen kan gaan om naar een level doorgestuurd te worden. Level 1 (introlevel): Hier moet de speler de instructies volgen en zo kan hij de controls van het spel leren. Onderweg moet e speler een goblin verslaan door op hem te springen. Als de speler de goblin ergens aanraakt (behalve bovenop) gaat de speler dood en moet hij opnieuw beginnen. Om de deur te openen moet de speler bij het interactiepunt de programmeer-puzzel oplossen. De puzzel wordt door middel van een tutorial in het spel volledig uitgelegd. Als de speler de puzzel succesvol oplost gaat de deur open, en vervolgens kan de speler het level voltooien. Level 2: In level 2 moet de speler zijn in het introlevel geleerde kennis toepassen. Het is een veel gevaarlijker level, met vuur- en spike-traps waar de speler dood aan kan gaan. Ook zijn er opnieuw meerdere goblins die de speler kunnen verslaan. En, als de speler van de platforms af valt en in de void terecht komt, zal hij ook dood gaan. Wel is er een checkpoint om de moeilijkheid te verminderen. Als de speler deze bereikt wordt hij voortaan hier gerespawned in plaats van aan het begin. Ook zijn er 2 interactiepunten waar de speler opnieuw programmeer-puzzels moet oplossen. De nieuwe concepten in deze puzzels worden door middel van een tutorial in het spel uitgelegd. De game en de website zijn gemaakt door een team wat bestaat uit May, Renske, Melvin, Joep en Tobias. Richting het einde van het project is daar ook nog Lisenca bijgekomen. Joep, May en Renske hebben voornamelijk de game gemaakt. Melvin en Tobias zijn ook met de game bezig geweest, maar zij kwamen er na een tijdje achter dat game development toch niet voor hen was weggelegd. Zij zijn toen een website voor de game gaan maken in React. Op die website staat ook deze chatbot. Ook is er een forum te vinden op de website waar gebruikers een account kunnen aanmaken om met andere gebruikers te communiceren op het forum.",
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
    <div className="center">
      <div className="ChatBot">
        <h1>Chat</h1>

        <div style={{ position: "relative" }}>
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
            <div id="ui">
              <input
                required
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
      </div>
    </div>
  );
}

export default ChatBot;
