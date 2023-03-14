import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {GiSkills} from "react-icons/gi";
import "./nav.css";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul>
      <li>
        <NavLink to="home">
          <span id="nav-span" title="Home"><AiTwotoneHome /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="about">
          <span id="nav-span" title="About"><FaUserTie /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="skills">
          <span id="nav-span" title="Skill"><GiSkills /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="project">
        <span id="nav-span" title="Project"><BsBriefcaseFill /></span>
        </NavLink>
      </li>
      <li>
        <NavLink to="contact">
        <span id="nav-span" title="Contact"><BsFillEnvelopeFill /></span>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
