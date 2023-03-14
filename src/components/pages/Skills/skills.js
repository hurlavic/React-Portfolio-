import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import "./skills.css";

function Skill() {
  return (
    <section id="skill">
      <div className="parent-container">
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>HTML</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>CSS</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>JAVASCRIPT</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>BOOTSTRAP</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>API</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>NODEJS</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>REACTJS</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>GIT</h6>
          <p>Intermediate</p>
        </div>
        <div className="skill-container">
          <span id="skill-span"><HiBadgeCheck/></span>
          <h6>GITHUB</h6>
          <p>Intermediate</p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
