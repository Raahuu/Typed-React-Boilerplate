import React from 'react';
import { useSnackbar } from 'notistack';

interface RootState {
  message: String;
  options: {
    key: string | number | undefined;
    variant: 'warning' | 'default' | 'error' | 'success' | 'info' | undefined;
  };
}

// eslint-disable-next-line import/no-mutable-exports
let NotifyAlert: Function;

const Notification: React.FC = () => {
  const [notify, setNotify] = React.useState<RootState[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  NotifyAlert = (value: RootState) => {
    setNotify((pre: RootState[]) => {
      pre.push(value);
      return pre;
    });
  };

  React.useEffect(() => {
    if (notify.length > 0) {
      notify.forEach((el: RootState) => {
        enqueueSnackbar(el.message, {
          ...el.options,
          onExited: (event, myKey) => {
            // remove Notification from state
          },
        });
      });
    }
  }, [notify, enqueueSnackbar, setNotify]);
  return null;
};
export { NotifyAlert };
export default Notification;
