import React from "react";

export default function Post(props) {
  return (
    <div className="post-container">
        
      <div className="top-portion">
      <div className="name-location-wrapper">
        <p className="name">{props.author}</p>
        <p className="location">{props.location} </p></div>
        <h1 className="three-dots">...</h1>
      </div>
      <div className="post-image">
        {console.log("http://localhost:9000/" + props.image)}
        {console.log(props)}
        <img src={"http://localhost:9000/" + props.image} alt="post" />
      </div>
      <div className="bottom-portion">
        <p className="like-button">❤️</p>
        <div className="share-button">
          <img src={require("./images/share.png")} alt="share-button" />
        </div>
        <div className="date-container">
        <p className="date">{props.date} </p></div>
      </div>
      <div className="description-likes">
        <div className="likes-container">
        <p className="like">{props.likes} likes</p></div>
        <div className="desc-container">
        <p className="desc">{props.description} </p></div>
      </div>
    </div>
  );
}
