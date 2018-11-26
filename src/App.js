import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeckInput from './components/InputComp';

var styleObj = {
  "width": "200px"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is a simple simulation of Hakkar the Soulflayer
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://media-hearth.cursecdn.com/avatars/380/844/636783326877212674.png" style={styleObj} />
          <img src="https://media-hearth.cursecdn.com/avatars/380/832/636783269746724042.png" style={styleObj} />
          </a>
          <br></br>
          <div class="row">
            <div class="col">
          <DeckInput player="A" />
          </div>
          <div class="col">
          <DeckInput player="B" />
          </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
