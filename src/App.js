import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Docker Volumes.</p>
        <p>Lets reload changes. This is from docker compose. Hot Reloaded . Shares same code</p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCWR5dG9sg5du-Zhq23m9kYA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aveti Tutorials
        </a>
      </header>
    </div>
  );
}

export default App;
