import React from "react";
import "../Style/SideBar.css";
import SideBarRow from "./SideBarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarRow
        src="https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg"
        title="Yonas Fissha"
      />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
};

export default SideBar;
