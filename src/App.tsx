import React from 'react';
import logo from './logo-coding-cerrado.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Coding Cerrado
        </p>
        <a
          className="App-link"
          href="https://github.com/CodingCerrado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coding Cerrado  - Github Page
        </a>
      </header>
    </div>
  );
}

export default App;
