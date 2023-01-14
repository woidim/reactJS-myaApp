import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <p className="img-thumb">
        <img src="https://i.ytimg.com/vi/yvlfmP0r9IE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxTph6gG8D0wd49Kcmxp0ud-__Sw" alt="iage Thumb" />
        <p className="time">{props.time}</p>
      </p>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "xx ditonton . x hari yang lalu",
};

export default YouTubeComp;
