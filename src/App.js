import React, { Component } from "react";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import { Button } from "react-bootstrap";
import Tilt from "react-vanilla-tilt";
import "./App.css";
import SocialProfiles from "./components/SocialProfiles/SocialProfiles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { displayBio: false };

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    const ifHeaderZero = `_ const create = yourIdea => {`;
    const ifHeaderOne = `___ if (simple && universal && powerful) {`;
    const ifHeaderTwo = `_____ return true;`;
    const ifHeaderThree = `___ } else { create(yourIdea); }}`;
    const skills = `Skills: ['HTML5/CSS4/JS', 'React.js', 'Bootstrap4', 'Node.js', 'Git/Github', 'npm/yarn']`;
    return (
      <div className="App">
        <header>
          <NavBar />
          <h1>-->Hello!{"<--"}</h1>
          <h3>-->My name is Gabriel Lupu, and I'm a web developer.{"<--"}</h3>
          <Tilt
            style={{
              backgroundColor: "transparent"
            }}
            className="headerCard"
            options={{ reverse: false }}
          >
            <div className="headerCard">
              <p className="headerCardContent">
                {ifHeaderZero}
                <br />
                {ifHeaderOne}
                <br />
                {ifHeaderTwo}
                <br />
                {ifHeaderThree}
              </p>
            </div>
          </Tilt>

          {this.state.displayBio ? (
            <div className="bio">
              <p>
                {skills}
                <br />
                I live in Iași, Romania, and code everyday.
                <br />
                My favorite language is JavaScript, I think React.js is awesome
                and I'm always grateful for the opportunity to work on
                meaningful projects.
                <br />
                Besides coding I also love meditation and travels.
              </p>
              <a href="#" onClick={this.toggleDisplayBio}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Show less
              </a>
            </div>
          ) : (
            <div className="bio">
              <a href="#" onClick={this.toggleDisplayBio}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Me
              </a>
            </div>
          )}
        </header>
        <Projects name="projects" />
        <SocialProfiles id="contact" />
      </div>
    );
  }
}

export default App;
