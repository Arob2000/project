import React from "react";
import "./landingpage.css";       
import landingphoto from "./image/landingphoto.png"; 

function LandingPage({ startDemo }) {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${landingphoto})` }}
    >
      {}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {}
      <div className="top-text">
        <h1 className="logo">WEB PROJECT</h1>
        <p className="subtext">fronted</p>
      </div>

      {}
      <div className="bottom-bar">
        Hellow From React & JavaScript Course Learning
      </div>

      {}
      <button className="second-page" onClick={startDemo}>
        Next page
      </button>
    </div>
  );
}

export default LandingPage;
