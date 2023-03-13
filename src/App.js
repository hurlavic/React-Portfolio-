import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavBar/NavTabs";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contacts/Contact";
import ProjectApp from "./components/pages/Projects/projectApp";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
      <NavTabs />
      {/* <ProjectApp/> */}
        <Routes>
          <Route exact path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="project" element={<ProjectApp/>} />
          
        </Routes>
        </div>
    </Router>
  );
}

export default App;
