import React from 'react';
import './App.css';
import Front from "./Front";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Front />
        <div className="social-links-container">
          <a href="https://github.com/milton-li" target="_blank">
            <img src="./github_icon.svg" width="65px" height="65px"/>
          </a>
          <a href="https://www.linkedin.com/in/m-arai-li/" target="_blank">
            <img src="./linkedin_icon.svg" width="65px" height="65px"/>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
