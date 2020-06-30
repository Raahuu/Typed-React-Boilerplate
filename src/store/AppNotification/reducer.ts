import produce from 'immer';
import { remove } from 'lodash';
import {
  ReducerState,
  NotificationTypes,
  NOTIFY_APP,
  REMOVE_NOTIFY,
  AddPayload,
} from './types';

const initialState: ReducerState = {
  notification: [],
};

const removeNotification = (notification: AddPayload[], id: Number) => {
  return remove(notification, (value: AddPayload) => value.options.key === id);
};

const reducer = (
  state = initialState,
  action: NotificationTypes
): ReducerState =>
  produce(state, (draft) => {
    const draftState = draft;
    switch (action.type) {
      case NOTIFY_APP:
        draftState.notification = [...draftState.notification, action.payload];
        return draftState;

      case REMOVE_NOTIFY:
        draftState.notification = removeNotification(
          draftState.notification,
          action.payload.id
        );
        return draftState;
      default:
        return state;
    }
  });

export default reducer;
