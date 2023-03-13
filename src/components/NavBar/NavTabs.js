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
          <AiTwotoneHome />
        </NavLink>
      </li>
      <li>
        <NavLink to="about">
          <FaUserTie />
        </NavLink>
      </li>
      <li>
        <NavLink to="project">
          <BsBriefcaseFill />
        </NavLink>
      </li>
      <li>
        <NavLink to="contact">
          <BsFillEnvelopeFill />
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
