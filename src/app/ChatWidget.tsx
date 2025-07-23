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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            max-width: calc(100vw - 20px);
            max-height: calc(100vh - 20px);
        }

        .chat-window.expanded {
            width: 500px;
            height: 700px;
            max-width: calc(100vw - 20px);
            max-height: calc(100vh - 20px);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
            .chat-window {
                width: min(380px, calc(100vw - 20px));
                height: min(520px, calc(100vh - 100px));
                bottom: 10px;
                right: 10px;
            }
            
            .chat-window.expanded {
                width: min(500px, calc(100vw - 20px));
                height: min(700px, calc(100vh - 100px));
            }
            
            #chat-button-container {
                bottom: 20px;
                right: 20px;
            }
        }

        @media (max-width: 480px) {
            .chat-window {
                width: calc(100vw - 20px);
                height: calc(100vh - 120px);
                bottom: 10px;
                right: 10px;
                left: 10px;
                margin: 0 auto;
            }
            
            .chat-window.expanded {
                width: calc(100vw - 20px);
                height: calc(100vh - 120px);
            }
        }
    
        .chat-header {
            background: #007bff;
            color: #ffffff;
            padding: 15px 20px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            backdrop-filter: blur(8px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    
         .chat-content {
            flex-grow: 1;
            overflow-y: auto;
            padding: 10px 5px 0px 5px;
            scroll-behavior: smooth;
        }

        .chat-message {
            border-radius: 20px;
            padding: 10px 15px;
            margin: 5px;
            max-width: 80%;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
            animation-duration: 0.3s;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-fill-mode: forwards;
        }
    
        .chat-hide {
            animation-name: slideOut;
            animation-duration: 0.3s;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-fill-mode: forwards;
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            backdrop-filter: blur(8px);
        }

        #chat-button:hover {
            background-color: var(--chat-primary-hover);
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        #chat-button:active {
            transform: translateY(-1px) scale(1.02);
            transition-duration: 0.1s;
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        #chat-button:hover .chat-icon-simple {
            transform: scale(1.1);
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
            animation: chatDotPulse 1.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
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
            margin-bottom: 8px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
            animation: notificationPulse 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
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
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chat-close-btn:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: scale(1.1);
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
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expand-btn:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: scale(1.1);
        }

        .expand-btn svg {
            width: 20px;
            height: 20px;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chat-window.expanded .expand-btn svg {
            transform: rotate(180deg);
        }

        /* Smooth scrollbar for chat content */
        .chat-content::-webkit-scrollbar {
            width: 6px;
        }

        .chat-content::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 3px;
        }

        .chat-content::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            transition: background 0.2s ease;
        }

        .chat-content::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.3);
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
                src="https://gate.convonest.com/contacts/load-script"
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
