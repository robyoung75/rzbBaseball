import React, { useState } from "react";
import "./ContactMobile.css";
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
      <h2>Razorback Contact</h2>
      <form id="contact">
        <div className="contact__input">
          <label id="contact__label" htmlFor="firstName">
            <span role="img" aria-label="baseball">
              ⚾
            </span>{" "}
            <p>First Name</p>
          </label>
          <input
            type="text"
            id="contact"
            name="firstname"
            placeholder="Your first name.."
          ></input>
        </div>
        <div className="contact__input">
          <label id="contact__label" htmlFor="lastName">
            <span role="img" aria-label="baseball">
              ⚾
            </span>{" "}
            <p>Last Name</p>
          </label>
          <input
            type="text"
            id="contact"
            name="lastname"
            placeholder="Your last name.."
          ></input>
        </div>
        <div className="contact__input">
          <label id="contact__label" htmlFor="country">
            <span role="img" aria-label="baseball">
              ⚾
            </span>{" "}
            <p>Email</p>
          </label>
          <input
            type="text"
            id="contact"
            name="email"
            placeholder="Your email address.."
          ></input>
        </div>
        <div className="contact__input">
          <label id="contact__label" htmlFor="subject">
            <span role="img" aria-label="baseball">
              ⚾
            </span>{" "}
            <p>Subject</p>
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </div>

        <input
          id="contact_submit"
          type="submit"
          value="Submit"
          className="contact__submit"
        ></input>
      </form>
    </div>
  );
};

export default Contact;
