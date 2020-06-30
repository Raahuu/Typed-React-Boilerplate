import React from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from 'store/AppNotification/action';
import 'css/App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(
    showNotification({
      message: 'Failed fetching data.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'warning',
      },
    })
  );
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
