import React, { Component } from "react";
import SOCIAL_PROFILES from "../../data/socialProfiles";
import SocialProfile from "../SocialProfile/SocialProfile";
import "./SocialProfiles.css";

class SocialProfiles extends Component {
  render() {
    return (
      <footer className="socialProfiles">
        <h4>Contact /></h4>
        <div className="profile">
          {SOCIAL_PROFILES.map(profile => {
            return <SocialProfile key={profile.id} profile={profile} />;
          })}
        </div>
      </footer>
    );
  }
}

export default SocialProfiles;
