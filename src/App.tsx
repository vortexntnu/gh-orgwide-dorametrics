import React from 'react';
import { Octokit } from "octokit";
import './App.css';

const App = (({}): React.JSX.Element => {
  const octokit = new Octokit({ auth: `personal-access-token123` });

  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-list">
          <li className="App-listelement">fk</li>
          <li className="App-listelement">fk</li>
          <li className="App-listelement">fk</li>
          <li className="App-listelement">fk</li>
        </ul>
      </header>
    </div>
  );
});

export default App;