import React from "react";


function ProjectGallery(props) {
  return (
    <section id='project'>
            <div class="cardContainer col-lg-3 col-md-6 col-sm-12">
              <div class="card">
                <img src={props.image} class="card-img-top" alt={props.title}/>
                <div class="card-body">
                  <h3 class="card-title">{props.title}</h3>
                  <p class="card-text">{props.description}</p>
                  <a href={props.deploy}>
                    <button type="button" class="btn btn-primary">Visit Site</button>
                  </a>
                  <a href={props.repo}> 
                    <button type="button" class="btn btn-secondary">View Codes</button>
                  </a>
                </div>
              </div>
            </div>
    </section>

    
  );
 
}



export default ProjectGallery;
