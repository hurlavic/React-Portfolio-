import React from "react";
import "./projects.css";

function ProjectGallery(props) {
  return (
    <section id="project">
      <div class="container-fluid row-1">
        <div class="row row-cols-1 row-cols-md-2 ">
          <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src={props.image} class="card-img-top" alt={props.title} />
              <div class="card-body">
                <h3 class="card-title">{props.title}</h3>
                <p class="card-text">{props.description}</p>
                {props.deploy && (
                  <a
                    href={props.deploy}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
