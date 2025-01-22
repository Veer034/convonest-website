"use client";
import React, { useState } from "react";

const ChatIntegration = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);

    // Add the iframe dynamically if it's not already added
    if (!localStorage.getItem("visited")) {
      const chatWindow = document.getElementById("chat-window");
      const iframeExists = chatWindow?.querySelector("iframe") !== null;

      if (!iframeExists) {
        const iframe = document.createElement("iframe");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = "http://gateway.convonest.com:32000/contacts/load-script";
        chatWindow?.appendChild(iframe);
      }
    }
  };

  return (
    <div
      id="chat-button-container"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {/* Chat Button */}
      <button
        id="chat-button"
        onClick={toggleChat}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <i className="lni lni-comments" />
      </button>

      {/* Chat Window */}
      {chatVisible && (
        <div
          id="chat-window"
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            overflow: "auto",
          }}
        ></div>
      )}
    </div>
  );
};

export default ChatIntegration;
