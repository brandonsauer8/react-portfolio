import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="">
                  <a href={project.live}>
                    <img src={process.env.PUBLIC_URL + project.image} alt="project alt" />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div>
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;