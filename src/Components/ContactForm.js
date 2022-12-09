import React from "react";
import "./ContactFormStyle.css";

const ContactForm = () => {
  const submitHandler = () => {
    alert("Get in touch soon....");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email ID</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows={6} placeholder="Put your message here..."></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
