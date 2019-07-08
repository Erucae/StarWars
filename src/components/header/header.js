import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
        <Link to="/" className="star-db">
          Star DB
        </Link>
        <Link to="/people/" className="reference people">
          People
        </Link>
        <Link to="/planets/" className="reference planets">
          Planets
        </Link>
        <Link to="/starships/" className="reference starships">
          Starships
        </Link>
    </div>
  );
};

export default Header;
