import React from "react";
import "./Main2Style.css";

const Main2 = (props) => {
  return (
    <div className="main-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Main2;
