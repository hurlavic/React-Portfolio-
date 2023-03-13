import React, { Component } from "react";
import projects from "../../../projects.json";
import ProjectGallery from "./Projects";
import Wrapper from "../../wrapper/wrapper";
import "./projects.css";
import refractor from '../../../assets/images/refractor.png'
// import portfolio from '../../../assets/images/jeshoot.jpg'
import prework from '../../../assets/images/prework.png'
import bootstrap from '../../../assets/images/bootstrap.png'


// class ProjectApp extends Component {
//     state = {
//       projects,
//     };
//     componentDidMount() {
//         console.log("Image:", this.state.projects[0].image);
//       }
  
//     render() {
//       return (
//         <Wrapper>
//           {this.state.projects.map(project => (
//             <ProjectGallery
//               key={project.id}
//               title={project.title}
//               description={project.description}
//               image={process.env.PUBLIC_URL + project.image}
//               deploy={project.deployedSite}
//               repo={project.githubLink}
//             />
//           ))}
//         </Wrapper>
        
//       );
     
//     }
    
//   }
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
          image={projects[3].image}
          deploy={projects[3].deployedSite}
          repo={projects[3].githubLink}
        />
        <ProjectGallery
          title={projects[4].title}
          description={projects[4].description}
          image={projects[4].image}
          deploy={projects[4].deployedSite}
          repo={projects[4].githubLink}
        />
        <ProjectGallery
          title={projects[5].title}
          description={projects[5].description}
          image={projects[5].image}
          deploy={projects[5].deployedSite}
          repo={projects[5].githubLink}
        />
        <ProjectGallery
          title={projects[6].title}
          description={projects[6].description}
          image={projects[6].image}
          deploy={projects[6].deployedSite}
          repo={projects[6].githubLink}
        />
        <ProjectGallery
          title={projects[7].title}
          description={projects[7].description}
          image={projects[7].image}
          deploy={projects[7].deployedSite}
          repo={projects[7].githubLink}
        />
        <ProjectGallery
          title={projects[8].title}
          description={projects[8].description}
          image={projects[8].image}
          deploy={projects[8].deployedSite}
          repo={projects[8].githubLink}
        />
      </Wrapper>
    );
  }
}

export default ProjectApp;