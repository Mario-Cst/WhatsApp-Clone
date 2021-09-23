import { AttachFile, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Chat.css";

const Chat = ({ messages }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("messages/new", {
      message: input,
      name: "Demo",
      timestamp: "just now",
      received: false,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last conexion...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.received === false && "chat_reciver"
            }`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Enviar mensaje
          </button>
        </form>
        <MicIcon /> :
      </div>
    </div>
  );
};

export default Chat;
