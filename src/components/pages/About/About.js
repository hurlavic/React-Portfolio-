import React from "react";
import "./about.css";
import { HiBadgeCheck } from "react-icons/hi";

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
          <div className="xp-cards">
            <div className="card-template">
              <span>
                <HiBadgeCheck />
              </span>
              <h4>Experience</h4>
              <p>Bootcamp training</p>
            </div>
            <div className="card-template">
              <span>
                <HiBadgeCheck />
              </span>
              <h4>Clients</h4>
              <p>Upcoming</p>
            </div>
            <div className="card-template">
              <span>
                <HiBadgeCheck />
              </span>
              <h4>Projects</h4>
              <p>15+</p>
            </div>
          </div>
          <div>
            <p className="about-text">
              this is just a dummy text to be reviewed later for a more accurate
              text that makes much mire more and morer sense lool this is just a
              dummy text to be reviewed later for a more accurate text that
              makes much mire more and morer sense lool this is just a dummy
              text to be reviewed later for a more accurate text that makes much
              mire more and morer sense lool
            </p>
            <button className="btn btn-primary mb-2">Let's talk</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
