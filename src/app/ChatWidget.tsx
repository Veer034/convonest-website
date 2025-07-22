// Create file names ChatWidget.jsx, and import it in main react jsx page

"use client";
import React, { useState, useEffect } from "react";

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const chatWindow = document.querySelector(".chat-window") as HTMLDivElement;
    if (!chatWindow) return; // Prevents error if element doesn't exist

    if (isChatOpen) {
      chatWindow.style.display = "flex"; // Ensures it's visible
      chatWindow.style.width = isExpanded ? "500px" : "380px";
      chatWindow.style.height = isExpanded ? "700px" : "520px";
      chatWindow.classList.add("chat-show");
      chatWindow.classList.remove("chat-hide");
    } else {
      chatWindow.classList.add("chat-hide");
      chatWindow.classList.remove("chat-show");
      setTimeout(() => {
        if (chatWindow) chatWindow.style.display = "none";
      }, 300);
    }
  }, [isChatOpen, isExpanded]);

  const toggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Styles */}
      <style>
        {`
        :root {
            --chat-primary-color: #007bff;
            --chat-primary-hover: #0062cc;
            --chat-bg-color: #ffffff;
            --chat-text-color: #333333;
            --chat-border-color: #e6e6e6;
            --chat-shadow-color: rgba(0, 0, 0, 0.15);
        }
    
        #chat-button-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
    
    
        .chat-window {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--chat-bg-color);
            border-radius: 16px;
            box-shadow: 0 8px 24px var(--chat-shadow-color);
            display: none;
            flex-direction: column;
            overflow: hidden;
            width: 380px;
            height: 520px;
            transition: width 0.3s ease, height 0.3s ease;
        }

        .chat-window.expanded {
            width: 500px;
            height: 700px;
        }
    
        .chat-header {
            background: #007bff;
            color: #ffffff;
            padding: 15px 20px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
        }
    
         .chat-content {
            flex-grow: 1;
            overflow-y: auto;
            padding: 10px 5px 0px 5px;
        }

        .chat-message {
            border-radius: 20px;
            padding: 10px 15px;
            margin: 5px;
            max-width: 80%;
        }
    
        
        @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(20px); opacity: 0; }
        }
    
        .chat-show {
            display: flex;
            animation-name: slideIn;
        }
    
        .chat-hide {
            animation-name: slideOut;
        }

        #chat-button {
            background-color: var(--chat-primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px var(--chat-shadow-color);
            transition: all 0.3s ease;
            position: relative;
        }

        #chat-button:hover {
            background-color: var(--chat-primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px var(--chat-shadow-color);
        }


        /* Chat Icon*/
        .chat-icon-simple {
            display: inline-block;
            width: 24px;
            height: 18px;
            background: #ffffff;
            border-radius: 3px;
            position: relative;
            margin-bottom: 8px;
        }

        .chat-icon-simple:after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 5px;
            width: 8px;
            height: 8px;
            background: #ffffff;
            transform: rotate(45deg);
        }
        /* Chat button dots indicator */
        .chat-dots {
            position: absolute;
            display: flex;
            gap: 3px;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
        }

        .chat-dot {
            width: 4px;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: chatDotPulse 1.5s infinite;
        }

        .chat-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .chat-dot:nth-child(3) {
            animation-delay: 0.4s;
        }


        @keyframes chatDotPulse {
            0%, 100% {
                opacity: 0.4;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.1);
            }
        }

        /* Chat icon styles */
        .chat-icon {
            font-size: 24px;
            margin-bottom: 8px; /* Make space for dots */
        }

        /* Optional: Add a notification badge */
        .chat-notification {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #ff4444;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--chat-bg-color);
            animation: notificationPulse 2s infinite;
        }

        @keyframes notificationPulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }

        .chat-close-btn {
                background: none;
                border: none;
                padding: 5px;
                cursor: pointer;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
            }

            .chat-close-btn:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            .chat-close-btn {
                background: none;
                border: none;
                padding: 5px;
                cursor: pointer;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
            }

            .chat-close-btn:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }

            .close-icon {
                position: relative;
                width: 14px;
                height: 14px;
                display: block;
            }

            .close-icon::before,
            .close-icon::after {
                content: "";
                position: absolute;
                width: 14px;
                height: 2px;
                background-color: #ffffff;
                border-radius: 1px;
                top: 50%;
                left: 0;
                transition: opacity 0.2s;
            }

            .close-icon::before {
                transform: rotate(45deg);
            }

            .close-icon::after {
                transform: rotate(-45deg);
            }

            .chat-close-btn:hover .close-icon::before,
            .chat-close-btn:hover .close-icon::after {
                opacity: 0.8;
            }
                   
            .header-left {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .expand-btn {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .expand-btn svg {
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
        }

        .chat-window.expanded .expand-btn svg {
            transform: rotate(180deg);
        }

        `}
      </style>
      {/* Chat Button & Window */}
      <div id="chat-button-container">
        <button id="chat-button" onClick={() => setIsChatOpen(!isChatOpen)}>
          <span className="chat-icon-simple"></span>
          <div className="chat-dots">
            <div className="chat-dot"></div>
            <div className="chat-dot"></div>
            <div className="chat-dot"></div>
          </div>
        </button>
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <div className="header-left">
                <button className="expand-btn" onClick={() => toggleClick()}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 14L10 6L18 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span>Chat with us</span>
              </div>
              <button
                className="chat-close-btn"
                onClick={() => setIsChatOpen(false)}
              >
                <span className="close-icon"></span>
              </button>
            </div>
            <div className="chat-content">
              {/* Embed the chat iframe */}
              <iframe
                src="http://localhost:8090/contacts/load-script"
                style={{
                  width: "100%",
                  height: "calc(100% - 5px)", // ✅ Properly expands iframe
                  border: "none",
                }}
                title="Chat"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
