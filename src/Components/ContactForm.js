import React, { useRef } from "react";
import "./ContactFormStyle.css";
import emailjs from "@emailjs/browser";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ContactForm = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          alert("Message sent...");
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
        <button type="submit" value="Send" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
