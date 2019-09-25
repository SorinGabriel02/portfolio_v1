import React, { Component } from "react";
import "./Project.css";

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
      <div className="projectCard">
        <h3>{title}</h3>
        <a
          href={linkLive}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "85%", alignSelf: "center" }}
        >
          <img src={image} />
        </a>
        <p>{description}</p>
        <div className="links">
          <a
            href={linkCode}
            style={{ textDecoration: "none", color: "whitesmoke" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Code
          </a>
          <a
            href={linkLive}
            style={{ textDecoration: "none", color: "whitesmoke" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Live
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
