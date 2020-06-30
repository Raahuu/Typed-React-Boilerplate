import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider as MuThemeProvider } from '@material-ui/core/styles';

import Notification from 'components/Notification';

import 'css/index.css';
import App from 'containers/App/App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <MuThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Notification />
        <App />
      </SnackbarProvider>
    </MuThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
