import React, { useState } from "react";
import "../Style/MessageSender.css";
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleEvenet = (e) => {
    e.preventDefault();

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar
          className="messageSender__avatar"
          src="https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg"
        />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What is on your mind?"
            className="messageSender_Input"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL"
            className="messageSender_imageInput"
          />
          <button onClick={handleEvenet} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
