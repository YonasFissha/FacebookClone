import React from "react";
import "../Style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Yonas</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
