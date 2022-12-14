import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { color } from "@mui/system";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-side">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Pune Maharashtra</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2342-343-32
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mansi25vv@gmail.com
            </h4>
          </div>
        </div>

        <div className="right-side">
          <h3 className="h3">Let's get social</h3>
          <p>
            Follow my online fan page on Facebook and profiles on Twitter,
            GitHub, Linkedin and Instagram.
          </p>
          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              href="https://github.com/mansivakte/Portfolio"
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            {/* <div className="social">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copy">
        <span className="bar"></span>
        created by <span>Mansi Vakte</span> |?? Copyright 2022-2023, All Rights
        Reserved.!
      </div>
    </div>
  );
};
