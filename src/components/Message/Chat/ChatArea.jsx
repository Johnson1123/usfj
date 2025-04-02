"use client";
import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import useSocket from "../../../hooks/useSocket";
import Image from "next/image";
import { TiUserAdd } from "react-icons/ti";



const ChatArea = ({ activeMember }) => {
  const [messages, setMessages] = useState({});
  const [userId, setUserId] = useState(null); // State for user ID
  const socket = useSocket();

  // ✅ Use useEffect to safely access localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserId(localStorage.getItem("userId")); // Retrieve user ID only on the client
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("loadMessages", (loadedMessages) => {
        console.log("📜 Loaded previous messages:", loadedMessages);
        setMessages((prev) => ({
          ...prev,
          General: loadedMessages,
        }));
      });

      socket.on("message", (data) => {
        console.log("📩 Incoming General Chat Message:", data);
        setMessages((prev) => ({
          ...prev,
          General: [...(prev["General"] || []), data],
        }));
      });
    }

    return () => {
      if (socket) {
        socket.off("loadMessages");
        socket.off("message");
      }
    };
  }, [socket]);

const handleSendMessage = ({ text, file }) => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.error("❌ User ID is missing! Cannot send message.");
    return;
  }

  const newMessage = {
    id: Date.now(),
    sender_id: userId,
    sender: "You",
    text: text || "",
    file: file ? URL.createObjectURL(file) : null,
    fileName: file ? file.name : null,
    fileType: file ? file.type : null,
    timestamp: new Date().toISOString(), // Better timestamp format
  };

  console.log("🚀 Sending Message:", newMessage);

  const chatKey = activeMember ? activeMember.name : "General"; // Store per user

  setMessages((prev) => ({
    ...prev,
    [chatKey]: [...(prev[chatKey] || []), newMessage],
  }));

  if (socket) {
    socket.emit("message", newMessage);
  }
};


  return (
    <div className="flex flex-col h-full relative">
      {/* Chat Header */}
      <div className="h-[59px] flex items-center justify-between px-5 bg-white border-b font-bold text-[18px] text-bgBlue">
        {activeMember ? (
          <div className="flex items-center gap-3">
            <Image
              src={activeMember.avatar}
              alt={activeMember.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1>{activeMember.name}</h1>
          </div>
        ) : (
          <h1>💬 General Chat</h1>
        )}

        <div>
          <TiUserAdd size={24} />
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-grow p-4 overflow-y-auto">
        {(messages[activeMember ? activeMember.name : "General"] || []).map(
          (msg, index) => (
            <ChatMessage
              key={msg.id || index}
              sender={msg.sender_id}
              text={msg.text}
              timestamp={msg.timestamp}
              file={msg.file}
              fileName={msg.fileName}
              fileType={msg.fileType}
            />
          )
        )}
      </div>

      {/* Chat Input */}
      <div className="flex-shrink-0">
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatArea;
