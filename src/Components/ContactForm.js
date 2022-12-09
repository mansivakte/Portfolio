import React, { useRef } from "react";
import "./ContactFormStyle.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5flb1g",
        "template_3ebxw0i",
        form.current,
        "cnNsBkKu9y0Mn6Wa4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Write me a message</h3>
        <label>Your Name</label>
        <input type="text" name="from_name"></input>
        <label>Email ID</label>
        <input type="email" name="from_email_id"></input>
        <label>Subject</label>
        <input type="text" name="from_subject"></input>
        <label>Message</label>
        <textarea
          rows={6}
          placeholder="Put your message here..."
          name="message"
        ></textarea>
        <input type="submit" value="Send" className="btn" />
        {/* <button className="btn" value="Send">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default ContactForm;
