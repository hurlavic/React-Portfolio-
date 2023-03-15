import React from "react";
import "./projects.css";

function ProjectGallery(props) {
  return (
    <section id="project">
      <div class="cardContainer">
        <div class="card">
          <img
            src={props.image}
            class="card-img-top"
            alt={props.title}
            className="card-img"
          />
          <div class="card-body">
            <h3 class="card-title">{props.title}</h3>
            <p class="card-text">{props.description}</p>
            {props.deploy && (
              <a href={props.deploy} rel="noopener noreferrer" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit Site
                </button>
              </a>
            )}
            <a href={props.repo} rel="noopener noreferrer" target="_blank">
              <button type="button" class="btn btn-secondary">
                View Codes
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
