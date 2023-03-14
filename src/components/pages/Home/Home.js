import React from "react";
import "./home.css";
import profile from "../../../projectImages/profile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <p className="portfolio">My Portfolio</p>
      <div className="text">
        <p className="intro-text">Hello, my name is</p>
        <h2 className="name">Victor Akindele</h2>
        <p className="intro-text">I am an intern frontend developer</p>
        <a href="/assets/cv/My_CV.pdf" download="My_CV.pdf">
          <button className="btn btn-primary mb-2">Download CV</button>
        </a>
        <Link to="/contact">
          <button className="btn btn-secondary mb-2">Let's Talk</button>
        </Link>
      </div>

      <div className="image-container">
        <img src={profile} alt="profile" className="img" />
      </div>
    </section>
  );
}

export default Home;
