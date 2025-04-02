"use client"
import { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "https://usfj-backend.onrender.com"; 

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io(SOCKET_SERVER_URL);
    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
