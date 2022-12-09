import React from "react";
import NavBar from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import Main2 from "../Components/Main2";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Main2 heading="CONTACT" text="Lets have a chat.." />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
