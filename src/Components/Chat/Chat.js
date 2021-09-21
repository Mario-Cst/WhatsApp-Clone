import { AttachFile, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
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
        <p className="chat_message">
          <span className="chat_name">Mario</span>
          Mensaje
          <span className="chat_timestamp">{new Date().toUTCString()} </span>
          This is a message
        </p>
        <p className="chat_message chat_reciver">
          <span className="chat_name">Mario</span>
          Mensaje
          <span className="chat_timestamp">{new Date().toUTCString()} </span>
          This is a message
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Escribe tu mensaje..." type="text" />
          <button type="submit">Enviar mensaje</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
