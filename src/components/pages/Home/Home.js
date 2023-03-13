import React from "react";
import "./home.css";
import profile from '../../../images/profile.jpg'

function Home() {
  return (
    <section id="home">
    <div className="parent">
      <p className="text-1">Hello, my name is</p>
      <h1 className="display">Victor Akindele</h1>
      <p className="text-2">I am an intern Front-end developer</p>
    </div>
    <image src={profile} alt="profile dp"/>
  
    </section>
  );
}

export default Home;
