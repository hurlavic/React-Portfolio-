import React from "react";
import "./home.css";
import profile from "../../../assets/images/profile.jpg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <div className="text">
        <p>Hello, my name is</p>
        <h2>Victor Akindele</h2>
        <p>I am an intern frontend developer</p>
        <a href="../../../assets/cv" download="prescribe.pdf">
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
