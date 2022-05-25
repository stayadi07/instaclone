import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="wwe-logo">
        <img src={require("./images/wwe.jpg")} alt="wweLogo" />
      </div>
      <div className="welcome-btn">
        <div className="welcome">
          <h1>Welcome to WWE Timeline</h1>
        </div>
        <div className="btn">
          <Link to="/postview">
            <button className="btn-design">Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
