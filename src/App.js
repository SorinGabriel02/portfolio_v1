import React, { Component } from "react";
import Projects from "./components/Projects/Projects";
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
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <p>My name is Gabriel, and I enjoy web development.</p>
        <p>
          I'm always grateful for the opportunity to work on meaningful
          projects.
        </p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Iași, Romania, and code everyday.</p>
            <p>
              My favorite language is JavaScript and I think React.js is
              awesome.
            </p>
            <p>Besides coding I also love meditation and travels.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
