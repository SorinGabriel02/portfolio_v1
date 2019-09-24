import React, { Component } from "react";
import "./Project.css";
import { Button } from "react-bootstrap";

class Project extends Component {
  render() {
    const {
      title,
      description,
      linkCode,
      linkLive,
      image
    } = this.props.project;

    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt="project showcase" />
        <p>{description}</p>
        <a href={linkCode} target="_blank" rel="noopener noreferrer">
          <Button>Code</Button>
        </a>
        <a href={linkLive} target="_blank" rel="noopener noreferrer">
          <Button>Live</Button>
        </a>
      </div>
    );
  }
}

export default Project;
