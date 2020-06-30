import React from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';

import { SelectorRootState, AddPayload } from 'store/AppNotification/types';
import { removeNotification, ClearAll } from 'store/AppNotification/action';

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector(
    (state: SelectorRootState) => state.AppNotification
  );
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (notification.length > 0) {
      notification.forEach((el: AddPayload) => {
        enqueueSnackbar(el.message, {
          ...el.options,
          autoHideDuration: 2000,
          onExited: (event, key) => {
            // remove Notification from state
            dispatch(removeNotification(Number(key)));
          },
        });
      });
    }
    return () => {
      dispatch(ClearAll());
    };
  }, [notification, enqueueSnackbar, dispatch]);
  return null;
};

export default Notification;
