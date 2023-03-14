import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import "./nav.css";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul>
      <li>
        <NavLink to="home">
          <span><AiTwotoneHome /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="about">
          <span><FaUserTie /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="project">
        <span><BsBriefcaseFill /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="contact">
        <span><BsFillEnvelopeFill /></span>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
