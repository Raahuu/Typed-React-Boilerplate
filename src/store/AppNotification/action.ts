import {
  AddPayload,
  NOTIFY_APP,
  REMOVE_NOTIFY,
  CLEAR_ALL,
  NotificationTypes,
} from './types';

// TypeScript infers that this function is returning SendMessageAction
export function showNotification(payload: AddPayload): NotificationTypes {
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

export function ClearAll() {
  return { type: CLEAR_ALL };
}
