import React, { Component } from "react";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import { Button } from "react-bootstrap";
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
    const skills = `_ let skills = ['HTML5/CSS4/JS', 'React.js', 'Bootstrap', 'Node.js', 'GIT/Github', 'npm/yarn']`;
    return (
      <div className="App">
        <NavBar />
        <header>
          <h1>-->Hello!{"<--"}</h1>
          <h3>-->My name is Gabriel Lupu, and I'm a web developer.{"<--"}</h3>
          <h4>
            {skills}
            <br />
            {ifHeaderZero}
            <br />
            {ifHeaderOne}
            <br />
            {ifHeaderTwo}
            <br />
            {ifHeaderThree}
          </h4>
          {this.state.displayBio ? (
            <div>
              <p>
                I live in Iași, Romania, and code everyday.
                <br />
                My favorite language is JavaScript, I think React.js is awesome
                and I'm always grateful for the opportunity to work on
                meaningful projects.
                <br />
                Besides coding I also love meditation and travels.
              </p>
              <Button variant="dark" onClick={this.toggleDisplayBio}>
                Show less
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="dark" onClick={this.toggleDisplayBio}>
                About
              </Button>
            </div>
          )}
        </header>
        <hr id="projects" />
        <Projects />
        <hr id="contact" />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
