import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider as MuThemeProvider } from '@material-ui/core/styles';

import Notification from 'components/Notification';

import Routes from './routes';

import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import history from './utils/history';

import 'css/index.css';

const { store, persistor } = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Suspense fallback={<div>...Loading</div>}>
              <ConnectedRouter history={history}>
                <Notification />
                <Routes />
              </ConnectedRouter>
            </Suspense>
          </SnackbarProvider>
        </MuThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
