import React, { useState } from "react";
import "./Contact.css";
//import emailjs from "emailjs-com";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   function sendEmail(e) {
  //     e.preventDefault();
  //     //  console.log('BUTTON  WORKS')

  //     emailjs
  //       .sendForm(
  //         "service_zh8my5p",
  //         "template_r1r87tm",
  //         "#contactForm",
  //         "user_5828w7SwtIBtQIaDKUD3b"
  //       )
  //       .then(
  //         (result) => {
  //           alert("SUCCESS", result.status, result.text);
  //         },
  //         (error) => {
  //           alert("FAILED", error, error.text);
  //         }
  //       );
  //     console.log(data);
  //     setName("");
  //     setSubject("");
  //     setEmail("");
  //     setMessage("");
  //   }

  function handleNameInput(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleEmailInput(e) {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  }

  function handleSubjectInput(e) {
    e.preventDefault();
    setSubject(e.target.value);
    console.log(subject);
  }

  function handleMessageInput(e) {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(message);
  }

  function handleKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault();
    }
  }

  return (
    <div className="contact">
      <div className="contact__content">
        <h1>Razorback Contact</h1>
        <form>
          <div className="contact__firstName">
            <label for="firstName"><span role="img" aria-label="baseball">⚾</span> First Name</label>
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="Your first name.."
            ></input>
          </div>
          <div className="contact__lastName">
            <label for="lastName"><span role="img" aria-label="baseball">⚾</span> Last Name</label>
            <input
              type="text"
              id="name"
              name="lastname"
              placeholder="Your last name.."
            ></input>
          </div>
          <div className="contact__email">
            <label for="country"><span role="img" aria-label="baseball">⚾</span> Email</label>
            <input
              type="text"
              id="email"
              name="emal"
              placeholder="Your email address.."
            ></input>
          </div>
          <div className="contact__subject">
            <label for="subject"><span role="img" aria-label="baseball">⚾</span> Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
          </div>

          <input type="submit" value="Submit" className="contact__submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
