"use client"
import React, { useState, useRef } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import EmojiPicker from "emoji-picker-react";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (message.trim() || file) {
      onSend({ text: message, file });
      setMessage("");
      setFile(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents accidental newline
      handleSend();
    }
  };

  // Handle emoji selection
  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false); // Close picker after selecting an emoji
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Trigger file input click
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative flex items-center p-4 w-full">
      {/* File Input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Message Input */}
      <input
        type="text"
        className="flex-grow px-10 py-3 rounded-full border focus:outline-none"
        placeholder="Enter your message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      {/* File Preview (for images) */}
      {file && file.type.startsWith("image/") && (
        <div className="absolute bottom-12 left-4">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
      )}

      {/* Send Button */}
      <button
        onClick={handleSend}
        className="ml-2 p-3 bg-blue-500 text-white rounded-full"
      >
        <BsFillSendFill size={18} />
      </button>

      {/* File Upload Icon */}
      <button
        onClick={handleFileUpload}
        className="absolute right-[80px] text-lg"
      >
        <FiPaperclip size={20} />
      </button>

      {/* Emoji Picker Icon */}
      <button
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="absolute left-7 text-lg"
      >
        <FaRegSmile size={20} />
      </button>

      {/* Emoji Picker Dropdown */}
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-4 bg-white shadow-lg rounded-lg">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
