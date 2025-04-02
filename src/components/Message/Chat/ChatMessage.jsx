"use client";
import React from "react";
import Image from "next/image";


const ChatMessage = ({
  sender,
  text,
  timestamp,
  isSender,
  file,
  fileName,
  fileType,
}) => {
  return (
    <div
      className={`flex items-end mb-4 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      {/* Sender Avatar (Only on Receiver's Side) */}
      {!isSender && (
        <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
          <Image
            src={sender?.avatar || "/Profile.png"} // Fallback to a default image
            alt={sender?.name}
            width={40}
            height={40}
            objectFit="cover"
          />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[300px] p-3 rounded-lg text-black ${
          isSender ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        {/* Display Text Message */}
        {text && <p className="text-sm">{text}</p>}

        {/* Display File Message (Image or Downloadable File) */}
        {file && (
          <div className="mt-2">
            {fileType?.startsWith("image/") ? (
              <Image
                src={file}
                alt="Uploaded"
                width={200}
                height={200}
                className="rounded-lg"
              />
            ) : (
              <a
                href={file}
                download={fileName}
                className="text-blue-300 underline text-sm"
              >
                📎 {fileName}
              </a>
            )}
          </div>
        )}

        {/* Timestamp */}
        <div className="text-xs text-gray-300 mt-1 text-right">{timestamp}</div>
      </div>

      {/* Empty space for alignment on sender side */}
      {isSender && <div className="w-10 h-10 ml-2"></div>}
    </div>
  );
};

export default ChatMessage;
