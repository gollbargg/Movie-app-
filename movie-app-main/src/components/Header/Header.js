import React from "react";
import "./style.css";

const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <p className="headerText"> Welcome to my movies playList</p>
      <input
        type="search"
        style={{
          height: 30,
          width: "20em",
          borderRadius: ".5em",
          padding: "0 1em",
          outline: "none",
          border: "none",
        }}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="category search"
      />
    </div>
  );
};

export default Header;
