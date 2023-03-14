import React, { useState } from "react";
import "./contacts.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Contact(props) {
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [error, setError] = useState("");

  async function handleForm(e) {
    e.preventDefault();

    const emailValidity =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValidity.test(email)) {
      setError("Please enter a valid email");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else if (textArea === "") {
      setError("Please enter your message");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      // Construct the email body
      const body = `Email: ${email}%0D%0A%0D%0A${textArea}`;

      // Construct the mailto URL
      const url = `mailto:toiboi.victor@gmail.com?subject=Contact Form&body=${body}`;

      // Open the email client with the mailto URL
      window.open(url, "_blank");
      setEmail("");
      setTextArea("");
    }
  }

  return (
    <section id="contact">
      <form onSubmit={handleForm}>
        <div className="form">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Send Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            maxLength="500"
          ></textarea>
          <div className="error">{error}</div>
          <div className="submit">
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
      <h5>OR CONNECT WITH ME</h5>
      <div className="icons">
        <a
          href="https://www.facebook.com/akindele.oluwatoyosi"
          rel="noopener noreferrer"
          target="_blank"
          id="icon"
        >
          <BsFacebook />
        </a>
        <a
          href="https://github.com/hurlavic"
          rel="noopener noreferrer"
          target="_blank"
          id="icon"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://twitter.com/Watoiy"
          rel="noopener noreferrer"
          target="_blank"
          id="icon"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/toyosi-akindele-725aa3103/"
          rel="noopener noreferrer"
          target="_blank"
          id="icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="tel:+447874083812"
          rel="noopener noreferrer"
          target="_blank"
          id="icon"
        >
          <AiFillPhone />
        </a>
      </div>
    </section>
  );
}

export default Contact;
