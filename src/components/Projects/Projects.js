import React, { Component } from "react";
import PROJECTS from "../../data/projects";
import Project from "../Project/Project";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <article>
        <h2>Highlighted Projects</h2>
        <div className="projectsSection">
          {PROJECTS.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </article>
    );
  }
}

export default Projects;
