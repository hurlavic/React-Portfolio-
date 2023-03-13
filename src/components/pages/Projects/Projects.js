import React from "react";
import image from '../../../images/profile.jpg'

function ProjectGallery() {
  return (
    <section id='project'>
            <div class="cardContainer col-lg-3 col-md-6 col-sm-12">
              <div class="card">
                <img src={image} class="card-img-top" alt="placeholder"/>
                <div class="card-body">
                  <h3 class="card-title">My Portfolio</h3>
                  <p class="card-text">This is a webpage showcasing my works, skills and contact details.</p>
                  <a href="https://hurlavic.github.io/my-portfolio/">
                    <button type="button" class="btn btn-primary">Visit Site</button>
                  </a>
                  <a href="https://github.com/hurlavic/my-portfolio"> 
                    <button type="button" class="btn btn-secondary">View Codes</button>
                  </a>
                </div>
              </div>
            </div>
    </section>
  );
}

export default ProjectGallery;
