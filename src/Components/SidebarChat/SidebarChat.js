import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last Message</p>
      </div>
    </div>
  );
};
