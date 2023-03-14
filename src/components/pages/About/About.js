import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";

function About() {
  return (
    <section>
      <div id="about">
        <div className="img-left">
          <img
            src="/assets/publicImage/about image.jpg"
            alt="profile dp"
            className="about-img"
          />
        </div>
        <div className="experience">
          <div className="xp-header">
            <h4 className="header-text">A little About me</h4>
            <div className="xp-cards">
              <div className="card-template">
                <span id="xp-icons">
                  <HiBadgeCheck />
                </span>
                <h5>Experience</h5>
                <p>Bootcamp training</p>
              </div>
              <div className="card-template">
                <span id="xp-icons">
                  <BsFillPeopleFill />
                </span>
                <h5>Clients</h5>
                <p>Upcoming</p>
              </div>
              <div className="card-template">
                <span id="xp-icons">
                  <MdOutlineWorkHistory />
                </span>
                <h5>Challenges completed</h5>
                <p>15+</p>
              </div>
            </div>
          </div>
          <div>
            <p className="about-text">
              I'm a highly motivated and enthusiastic Frontend Developer with a
              passion for creating beautiful and responsive web applications.
              Recently completed a bootcamp training in Frontend Development at
              the University of Birmingham. Skilled in HTML, CSS, JavaScript,
              and ReactJS. Eager to leverage my skills and knowledge to
              contribute to a dynamic and innovative team.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary mb-2">Let's talk</button>
            </Link>
            <Link to="/skills">
              <button className="btn btn-secondary mb-2">View my skills</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
