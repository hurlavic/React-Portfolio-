import React, { Component } from "react";
import projects from "../../../projects.json";
import ProjectGallery from "./Projects";
import Wrapper from "../../Wrapper/wrapper";
import "./projects.css";

// imports image for card
import refractor from '../../../projectImages/refractor.png'
import prework from '../../../projectImages/prework.png'
import bootstrap from '../../../projectImages/bootstrap.png'
import passwordGen from '../../../projectImages/password.png'
import quiz from '../../../projectImages/quiz.png'
import weather from '../../../projectImages/weather.png'
import country from '../../../projectImages/country.png'
import readme from '../../../projectImages/open-graph-logo.png'
import profileGen from '../../../projectImages/profile gen.png'


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