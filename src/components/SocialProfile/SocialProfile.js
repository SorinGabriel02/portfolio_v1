import React, { Component } from "react";
import "./SocialProfile.css";

class SocialProfile extends Component {
  sortTab() {
    const { link, image } = this.props.profile;
    if (link.includes("mailto")) {
      return (
        <a href={link}>
          <img src={image} alt="profile-icon" />
        </a>
      );
    }
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="profile-icon" />
      </a>
    );
  }

  render() {
    return <div>{this.sortTab()}</div>;
  }
}
export default SocialProfile;
