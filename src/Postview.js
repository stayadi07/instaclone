import React from "react";
import "./Postview.css";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";
const Postview = () => {
  const [data, usedata] = useState([]);

  const getData = async () => {
    let response = await fetch(process.env.REACT_APP_API + '/v1/posts', {
      method: "GET",
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    });
    let actualData = await response.json();
    const d = actualData.user
    d.reverse()
    console.log(d);
    usedata(d);
  };
  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div className="site-container">
      <Header />
      {data.map((element, idx) => {
        return (
          <Post
            key={idx}
            author={element.author}
            location={element.location}
            likes={element.likes}
            description={element.description}
            image={element.image}
            date={element.date}
          />
        );
      })}
    </div>
  );
};

export default Postview;
