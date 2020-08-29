import React from "react";
import "../Style/SideBarRow.css";
import Avatar from "@material-ui/core/Avatar";

const SideBarRow = ({ title, Icon, src }) => {
  return (
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
