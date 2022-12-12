import React from "react";
import "./MainStyle.css";
import MainImg from "../assets/m1.webp";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="main-img1" src={MainImg}></img>
      </div>
      <div className="content">
        <p>HI, I'M A DEVELOPER</p>
        <h1>Reactjs Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
