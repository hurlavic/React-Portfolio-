import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavBar/NavTabs";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import ProjectGallery from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contacts/Contact";
// import projects from './projects.json'
import "./index.css";

function App() {
  return (
    <Router>
      <div>
      <NavTabs />
        <Routes>
          <Route exact path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="project" element={<ProjectGallery/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
