import React, { Component } from "react";
import SOCIAL_PROFILES from "../../data/socialProfiles";
import SocialProfile from "../SocialProfile/SocialProfile";
import "./SocialProfiles.css";

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h3>Get in Touch</h3>
        <div className="socialProfiles">
          {SOCIAL_PROFILES.map(profile => {
            return <SocialProfile key={profile.id} profile={profile} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
