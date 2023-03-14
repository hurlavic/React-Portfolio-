import React from "react";
import "./about.css";
import {Link} from 'react-router-dom'
import { HiBadgeCheck } from "react-icons/hi";
import {BsFillPeopleFill} from 'react-icons/bs';
import {MdOutlineWorkHistory} from 'react-icons/md'

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
              <h5>Projects</h5>
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
            <Link to="/contact">
            <button className="btn btn-primary mb-2">Let's talk</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
