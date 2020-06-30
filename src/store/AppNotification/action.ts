import {
  AddPayload,
  NOTIFY_APP,
  REMOVE_NOTIFY,
  NotificationTypes,
} from './types';

// TypeScript infers that this function is returning SendMessageAction
export function addNotification(payload: AddPayload): NotificationTypes {
  return {
    type: NOTIFY_APP,
    payload,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function removeNotification(id: number): NotificationTypes {
  return {
    type: REMOVE_NOTIFY,
    payload: {
      id,
    },
  };
}
