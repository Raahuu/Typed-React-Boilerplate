import React from 'react';
import Notification, { NotifyAlert } from 'components/Notification';
import 'css/App.css';

function App() {
  return (
    <div className="App">
      <Notification />
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
