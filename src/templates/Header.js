import React from "react";
import "./Header.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonAddIcon
            fontSize="large"
            onClick={() => history.push("/add-person")}
          />
        </IconButton>
      )}

      <Link to="/">
        <img
          src="https://lh3.googleusercontent.com/proxy/Z9Otutru6LfoEWtXaTpqLN1S3Z0BIfAmAdFO0XW9Mi3hBehbM8a_zs85ELFvkbBN2cUSRCxh6qYMNDPR2-6VCLee4mJytepBO_XiNj2fj2g3TIe0UHlh8mXwaA"
          alt="tinder logo"
          className="header__logo"
        />
      </Link>
    </div>
  );
}

export default Header;
