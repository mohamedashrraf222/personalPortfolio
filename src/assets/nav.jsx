import React from "react";
import "../index.css";

export default function Nav() {
  return (
    <nav className="navbar--mainContainer">
      <h1 className="navbar--myName"><div>Mohamed Ashraf</div></h1>

      <div className="navbar--contents">
        <a href="#section1">about me</a>
        <a href="#section2">cirtifcates</a>
        <a href="#section3">projects</a>
        <a href="#section4">contact</a>
      </div>
    </nav>
  );
}
