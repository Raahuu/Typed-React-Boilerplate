import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'css/App.css';
import { defaultAction } from 'store/App/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defaultAction('test'));
  }, [dispatch]);

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
