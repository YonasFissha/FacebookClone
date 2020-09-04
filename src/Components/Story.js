import React from "react";
import "../Style/Story.css";
import Avatar from "@material-ui/core/Avatar";
const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};
export default Story;