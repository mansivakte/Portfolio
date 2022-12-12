import React from "react";
import NavBar from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import Main2 from "../Components/Main2";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Main2
        heading="CONTACT"
        text={
          <div>
            <p>
              If you wanna get in touch, talk to me about a project
              collaboration, just fill up the awesome form below or send an
              email to mansi25vv@gmail.com and ~let's talk.
            </p>
          </div>
        }
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
