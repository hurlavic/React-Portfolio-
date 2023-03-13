import React from "react";
import "./contacts.css";
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'

function Contact(props) {
  return (
    <section id="contact">
      <form>
        <div className="form">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="text"
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
          ></textarea>
          <div className="submit">
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
      <h5>OR CONNECT WITH ME</h5>
      <div className="icons">
        <a href="https://www.facebook.com/akindele.oluwatoyosi" rel="noopener noreferrer" target="_blank" id="icon"><BsFacebook /></a>
        <a href="https://github.com/hurlavic" rel="noopener noreferrer" target="_blank" id="icon"><AiOutlineGithub /></a>
        <a href="https://twitter.com/Watoiy" rel="noopener noreferrer" target="_blank" id="icon"><BsTwitter /></a>
        <a href="https://www.linkedin.com/in/toyosi-akindele-725aa3103/" rel="noopener noreferrer" target="_blank" id="icon"><FaLinkedin /></a>
        <a href="tel:+447874083812" rel="noopener noreferrer" target="_blank" id="icon"><AiFillPhone /></a>
      </div>
    </section>
  );
}

export default Contact;
