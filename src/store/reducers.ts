/* eslint-disable  */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';

import DefaultReducer from './App/reducer';
import NotificationReducer from './AppNotification/reducer';
const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  router: connectRouter(history),
  Default: DefaultReducer,
  AppNotification: NotificationReducer,
});
export default rootReducer;
