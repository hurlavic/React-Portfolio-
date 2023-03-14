import React, { Component } from "react";
import projects from "../../../projects.json";
import ProjectGallery from "./Projects";
import Wrapper from "../../wrapper/wrapper";
import "./projects.css";

// imports image for card
import refractor from '../../../assets/images/refractor.png'
import prework from '../../../assets/images/prework.png'
import bootstrap from '../../../assets/images/bootstrap.png'
import passwordGen from '../../../assets/images/password.png'
import quiz from '../../../assets/images/quiz.png'
import weather from '../../../assets/images/weather.png'
import country from '../../../assets/images/country.png'
import readme from '../../../assets/images/open-graph-logo.png'
import profileGen from '../../../assets/images/profile gen.png'


class ProjectApp extends Component {
  state = {
    projects,
  };
  
  render() {
    return (
      <Wrapper>
        <ProjectGallery
          title={projects[0].title}
          description={projects[0].description}
          image={prework}
          deploy={projects[0].deployedSite}
          repo={projects[0].githubLink}
        />
        <ProjectGallery
          title={projects[1].title}
          description={projects[1].description}
          image={refractor}
          deploy={projects[1].deployedSite}
          repo={projects[1].githubLink}
        />
        <ProjectGallery
          title={projects[2].title}
          description={projects[2].description}
          image={bootstrap}
          deploy={projects[2].deployedSite}
          repo={projects[2].githubLink}
        />
        <ProjectGallery
          title={projects[3].title}
          description={projects[3].description}
          image={passwordGen}
          deploy={projects[3].deployedSite}
          repo={projects[3].githubLink}
        />
        <ProjectGallery
          title={projects[4].title}
          description={projects[4].description}
          image={quiz}
          deploy={projects[4].deployedSite}
          repo={projects[4].githubLink}
        />
        <ProjectGallery
          title={projects[5].title}
          description={projects[5].description}
          image={weather}
          deploy={projects[5].deployedSite}
          repo={projects[5].githubLink}
        />
        <ProjectGallery
          title={projects[6].title}
          description={projects[6].description}
          image={country}
          deploy={projects[6].deployedSite}
          repo={projects[6].githubLink}
        />
        <ProjectGallery
          title={projects[7].title}
          description={projects[7].description}
          image={readme}
          deploy={projects[7].deployedSite}
          repo={projects[7].githubLink}
        />
        <ProjectGallery
          title={projects[8].title}
          description={projects[8].description}
          image={profileGen}
          deploy={projects[8].deployedSite}
          repo={projects[8].githubLink}
        />
      </Wrapper>
    );
  }
}

export default ProjectApp;