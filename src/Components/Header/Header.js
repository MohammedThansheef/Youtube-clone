import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menuIcon" />
        <Link to="/">
          <img
            className="header__image"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__search">
        <input
          placeholder="Search"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__searchButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Thanseef tan"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGF5Tw7u6Rhng/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=YxXIUU7ZSry22aTHv_yQAkhsaPrawp58CRtXSLV2Qnc"
        />
      </div>
    </div>
  );
}

export default Header;
