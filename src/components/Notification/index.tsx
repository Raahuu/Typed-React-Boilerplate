import React from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';

import { SelectorRootState } from 'store/AppNotification/types';
import { removeNotification } from 'store/AppNotification/action';

// eslint-disable-next-line import/no-mutable-exports
let NotifyAlert: Function;

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector(
    (state: SelectorRootState) => state.AppNotification
  );
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (notification.length > 0) {
      notification.forEach((el) => {
        enqueueSnackbar(el.message, {
          ...el.options,
          onExited: (event, key) => {
            // remove Notification from state
            dispatch(removeNotification(Number(key)));
          },
        });
      });
    }
  }, [notification, enqueueSnackbar, dispatch]);
  return null;
};
export { NotifyAlert };
export default Notification;
