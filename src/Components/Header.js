import React from "react";
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <div className="header">
        <div className="logo">
            <img src={require("./images/logoInsta.png")} alt="logo" />
        </div>
      <h1>InstaClone</h1>
      <div className="image-container">
        <Link to ='/Form'><img src={require("./images/img.jpg")} alt="avatar"/></Link>
        
      </div>
    </div>

  );
}
