import React from 'react';
import { NotifyAlert } from 'components/Notification';
import 'css/App.css';

function App() {
  NotifyAlert({
    message: 'Failed fetching data.',
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'warning',
    },
  });

  return (
    <div className="App">
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
