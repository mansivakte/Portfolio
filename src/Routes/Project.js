import React from "react";
import NavBar from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import Main2 from "../Components/Main2";
import PriceCard from "../Components/PriceCard";
import Work from "../Components/Work";

const Project = () => {
  return (
    <div>
      <NavBar />
      <Main2
        heading=" PROJECT"
        text="Here are a few past design projects I've worked on."
      />
      <Work />
      <PriceCard />
      <Footer />
    </div>
  );
};

export default Project;
