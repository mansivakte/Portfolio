import React from "react";
import "./AboutContaintStyle.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContaint = () => {
  return (
    <div className="about">
      <div className="left-side">
        <h1>Who Am I?</h1>
        <p>
          Im a react front-end developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
      <div className="right-side">
        <div className="img-container">
          <div className="img-stacktop">
            <img src={React2} alt="true" className="img"></img>
          </div>
          <div className="img-stackbottom">
            <img src={React1} alt="true" className="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContaint;
