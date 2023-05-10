import React from 'react';

function ProjectList(props) {
  return (
    <div className="project-list">
      {props.projects.map((project, index) => (
        <Project key={index} img={project.img} />
      ))}
    </div>
  );
}

function Project(props) {
  return (
    <div className="project">
      <img src={props.img} alt="" />
    </div>
  );
}

export default ProjectList;