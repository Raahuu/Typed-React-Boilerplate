export const NOTIFY_APP = 'NOTIFY_APP';
export const REMOVE_NOTIFY = 'REMOVE_NOTIFY';

export interface AddPayload {
  message: String;
  options: {
    key: number | undefined;
    variant: 'warning' | 'default' | 'error' | 'success' | 'info' | undefined;
  };
}

export interface ReducerState {
  notification: AddPayload[];
}

export interface SelectorRootState {
  AppNotification: ReducerState;
}

interface NotifyAppAction {
  type: typeof NOTIFY_APP;
  payload: AddPayload;
}

interface RemoveNotifyAppAction {
  type: typeof REMOVE_NOTIFY;
  payload: {
    id: number;
  };
}

export type NotificationTypes = NotifyAppAction | RemoveNotifyAppAction;
