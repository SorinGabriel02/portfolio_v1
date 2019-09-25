import React, { Component } from "react";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
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
    const ifHeaderZero = `_ _ const create = yourIdea => {`;
    const ifHeaderOne = `_ _ _ if (simple && universal && powerful) {`;
    const ifHeaderTwo = `_ _ _ _ return true;`;
    const ifHeaderThree = `_ _ } else { create(yourIdea); }}`;
    const skills = `['HTML5/CSS4/JS', 'React.js', 'Bootstrap4', 'Node.js', 'Git/Github', 'npm/yarn']`;
    return (
      <div className="App">
        <header>
          <NavBar />
          <div className="landing">
            <div>
              <h1 style={{ fontSize: "5rem" }}>
                <span>H</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span>!</span>
              </h1>
              <h3 style={{ fontSize: "4vmax" }}>
                -->My name is Gabriel Lupu,
                <br />
                and I'm a web developer.{"<--"}
              </h3>
            </div>
            <Tilt
              onClick={this.toggleDisplayBio}
              className="headerCard"
              style={{
                backgroundColor: "transparent",
                margin: "2%",
                maxWidth: "50vw"
              }}
              options={{ reverse: false }}
            >
              <div className="headerCard">
                <h3
                  className="headerCardContent"
                  style={{ fontSize: "2.5vmax" }}
                >
                  {ifHeaderZero}
                  <br />

                  {ifHeaderOne}
                  <br />

                  {ifHeaderTwo}
                  <br />

                  {ifHeaderThree}
                </h3>
              </div>
            </Tilt>
          </div>
          {this.state.displayBio ? (
            <div className="bio">
              <p>
                Skills: <span style={{ color: "#2195f3" }}>{skills}</span>
              </p>
              <p>
                I live in Iași, Romania, and code everyday.
                <br />
                My favorite language is JavaScript, I think React.js is awesome
                and I'm always grateful for the opportunity to work on
                meaningful projects.
                <br />
                Besides coding I also love meditation and coffee.
              </p>
              <a href="#/" onClick={this.toggleDisplayBio}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Show less
              </a>
            </div>
          ) : (
            <div className="bio">
              <a href="#/" onClick={this.toggleDisplayBio}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Me
              </a>
            </div>
          )}
        </header>
        <a id="projects"></a>
        <Projects />
        <a id="contact"></a>
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
