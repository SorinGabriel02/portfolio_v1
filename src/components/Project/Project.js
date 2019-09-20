import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    const { title, description, link, image } = this.props.project;

    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt="project showcase" />
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

export default Project;
