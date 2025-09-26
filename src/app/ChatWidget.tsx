// Create file names ChatWidget.jsx, and import it in main react jsx page

"use client";
import React, { useState, useEffect, useRef } from "react";

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // ✅ Start with chat open
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [hasNotification, setHasNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false); // ✅ Track iframe load state
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatWindow = document.querySelector(".chat-window") as HTMLDivElement;
    if (!chatWindow) return;

    if (isChatOpen) {
      chatWindow.style.display = "flex"; // Ensures it's visible
      chatWindow.style.width = isExpanded ? "500px" : "380px";
      chatWindow.style.height = isExpanded ? "700px" : "520px";
      chatWindow.classList.add("chat-show");
      chatWindow.classList.remove("chat-hide");

      // Add/remove expanded class based on isExpanded state
      if (isExpanded) {
        chatWindow.classList.add("expanded");
      } else {
        chatWindow.classList.remove("expanded");
      }
    } else {
      chatWindow.classList.add("chat-hide");
      chatWindow.classList.remove("chat-show");
      setTimeout(() => {
        if (chatWindow) chatWindow.style.display = "none";
      }, 300);
    }
  }, [isChatOpen, isExpanded]);

  // Listen for messages from iframe to change tab data
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // console.log("Original message from iframe origin:", event.origin);
      // console.log("Original message from iframe data:", event.data);
      if (event.origin !== "https://gate.convonest.com") return;

      // console.log("Received message from iframe:", event.data);
      if (event.data.type === "CHANGE_TAB") {
        setActiveTab(event.data.tabName || "chat");
      }

      // Show notification dot when new message arrives and chat is closed
      if (event.data.type === "NEW_MESSAGE" && !isChatOpen) {
        setHasNotification(true);
      }

      // ✅ Listen for iframe ready signal
      if (event.data.type === "IFRAME_READY") {
        // console.log("iframe loaded messages");
        setIsIframeLoaded(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Send tab change to iframe when tab changes
  useEffect(() => {
    if (isIframeLoaded && iframeRef.current?.contentWindow) {
      // console.log("Sending CHANGE_TAB message:", activeTab);
      iframeRef.current.contentWindow.postMessage(
        {
          type: "CHANGE_TAB",
          activeTab: activeTab,
        },
        "https://gate.convonest.com"
      );
    }
  }, [activeTab, isIframeLoaded]);

  // ✅ Set color when iframe loads

  useEffect(() => {
    if (isIframeLoaded) {
      // Add delay to ensure iframe scripts are fully loaded
      setTimeout(() => {
        setChatWidgetInternalColour();
      }, 1000); // Increased delay for production
    }
  }, [isIframeLoaded]);

  const toggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // Clear notification when chat is opened
    if (!isChatOpen) {
      setHasNotification(false);
    }
  };

  const handleRestartChat = () => {
    if (isIframeLoaded && iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: "RESTART_CHAT" },
        "https://gate.convonest.com"
      );
    }
    setShowMenu(false);
  };

  // Set chat widget internal colors

  const setChatWidgetInternalColour = () => {
    if (isIframeLoaded && iframeRef.current?.contentWindow) {
      // Add multiple retry attempts for production reliability
      const sendColorMessage = (attempt = 0) => {
        try {
          iframeRef.current?.contentWindow?.postMessage(
            {
              type: "COLOUR_SET",
              value: {
                primaryColor: "#007bff",
                agentTextBgColour: "#e3f2fd",
                agentTextColour: "#1565c0",
                customerTextBgColour: "#007bff",
                customerTextColour: "#ffffff",
              },
            },
            "https://gate.convonest.com"
          );
          // console.log("Color message sent successfully, attempt:", attempt + 1);
        } catch (error) {
          console.error("Failed to send color message:", error);
          if (attempt < 2) {
            setTimeout(() => sendColorMessage(attempt + 1), 500);
          }
        }
      };

      sendColorMessage();
    } else {
      console.log("Iframe not ready or not loaded yet");
    }
  };

  // ✅ Handle iframe load event
  const handleIframeLoad = () => {
    // console.log("Iframe loaded");
    // Small delay to ensure iframe is fully initialized
    setTimeout(() => {
      setIsIframeLoaded(true);
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
      {/* Styles */}
      <style>
        {`
        :root {
            --chat-primary-color: #007bff;
            --chat-primary-hover: #0062cc;
            --chat-bg-color: #ffffff;
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
            padding: 5px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            backdrop-filter: blur(8px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 100;
        }

        
            /* Conditionally added styles when faqSelected is true */
            .chat-tabs {
              display: flex;
              background: #f8f9fa;
              border-bottom: 1px solid var(--chat-border-color);
              position: relative;
              z-index: 50;
            }
      
            .chat-tab {
              flex: 1;
              padding: 12px 16px;
              color: var(--chat-primary-color);
              background: var(--chat-bg-color);
              border: none;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              color: #666;
              transition: all 0.2s ease;
              position: relative;
            }
      
            .chat-tab:hover {
              color: var(--chat-primary-color);
            }
      
            .chat-tab.active {
              color: var(--chat-primary-color);
              background: var(--chat-bg-color);
            }
      
            .chat-tab.active::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: var(--chat-primary-color);
            }
          
          
         .chat-content {
            flex-grow: 1;
            overflow-y: auto;
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
            background: linear-gradient(135deg, var(--chat-primary-color) 0%, var(--chat-primary-hover) 100%);
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
            background: linear-gradient(135deg, var(--chat-primary-hover) 0%, #003d82 100%);
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
            padding: 8px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chat-close-btn:hover {
            background-color: rgba(255, 255, 255, 0.15);
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
            padding: 8px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expand-btn:hover {
            background-color: rgba(255, 255, 255, 0.15);
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
        .chat-footer {
            background: #f8f9fa;
            padding: 6px 12px;
            border-top: 1px solid var(--chat-border-color);
            text-align: center;
            font-size: 11px;
            color: #666;
            border-radius: 0 0 16px 16px;
        }

        .chat-footer a {
            color: var(--chat-primary-color);
            text-decoration: none;
            font-weight: 500;
        }

        .chat-footer a:hover {
            text-decoration: underline;
        }

        .chat-menu-container {
          position: relative;
        }

        .chat-header-right {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 200;
        }

        .chat-menu-btn {
          background: none;
          border: none;
          font-size: 18px;
          color: white;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: bold;
        }

        .chat-menu-btn:hover {
          background-color: rgba(255, 255, 255, 0.15);
          transform: scale(1.1);
        }
        
        .menu-wrapper {
          position: relative;
          z-index: 1000;
        }

        .chat-menu-dropdown {
          position: absolute;
          right: -45px;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          z-index: 1001;
          min-width: 160px;
          overflow: hidden;
          padding: 4px 0;
          backdrop-filter: blur(8px);
          animation: menuSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .chat-menu-dropdown button {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 8px 16px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chat-menu-dropdown button:hover {
          background-color: #f8f9fa;
          color: var(--chat-primary-color);
          transform: translateX(2px);
        }

        .chat-menu-dropdown button:active {
          background-color: rgba(0, 123, 255, 0.1);
          transform: translateX(0);
        }

        /* Add a subtle arrow to the dropdown */
        .chat-menu-dropdown::before {
          content: '';
          position: absolute;
          top: 12px;
          left: -6px;
          width: 12px;
          height: 12px;
          background-color: #ffffff;
          border-left: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          transform: rotate(45deg);
          z-index: -1;
        }
            

        `}
      </style>
      {/* Chat Button & Window */}
      <div id="chat-button-container">
        <button id="chat-button" onClick={toggleChat}>
          <span className="chat-icon-simple"></span>
          <div className="chat-dots">
            <div className="chat-dot"></div>
            <div className="chat-dot"></div>
            <div className="chat-dot"></div>
          </div>
          {hasNotification && !isChatOpen && (
            <div className="chat-notification">!</div>
          )}
        </button>
        {isChatOpen && (
          <div className={`chat-window ${isExpanded ? "expanded" : ""}`}>
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

              <div className="chat-header-right">
                <div className="menu-wrapper" ref={menuRef}>
                  <button
                    className="chat-menu-btn"
                    onClick={() => setShowMenu((prev) => !prev)}
                    aria-label="Open Menu"
                  >
                    ⋮
                  </button>

                  {showMenu && (
                    <div className="chat-menu-dropdown">
                      <button onClick={handleRestartChat}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                        Restart Chat
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="chat-close-btn"
                  onClick={() => setIsChatOpen(false)}
                >
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>

            <div className="chat-tabs">
              <button
                className={`chat-tab ${activeTab === "chat" ? "active" : ""}`}
                onClick={() => setActiveTab("chat")}
              >
                Chat
              </button>
              <button
                className={`chat-tab ${activeTab === "faq" ? "active" : ""}`}
                onClick={() => setActiveTab("faq")}
              >
                Ask AI
              </button>
            </div>

            <div className="chat-content">
              {/* Embed the chat iframe */}
              <iframe
                src="https://gate.convonest.com/contacts/load-script"
                ref={iframeRef}
                onLoad={handleIframeLoad} // ✅ Add onLoad event
                style={{
                  width: "100%",
                  height: "calc(100% - 5px)", // ✅ Properly expands iframe
                  border: "none",
                }}
                title="Chat"
              />
            </div>
            <div className="chat-footer">Powered by Convonest</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
