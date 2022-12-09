import React from "react";
import NavBar from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import Main2 from "../Components/Main2";
import AboutContaint from "../Components/AboutContaint";

const About = () => {
  return (
    <div>
      <NavBar />
      <Main2 heading="ABOUT" text="I'm Frontend Developer" />
      <AboutContaint />
      <Footer />
    </div>
  );
};

export default About;
