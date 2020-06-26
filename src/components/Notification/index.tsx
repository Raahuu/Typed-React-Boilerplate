import React from 'react';
import { useSnackbar } from 'notistack';

interface RootState {
  message: String;
  options: {
    key: number | undefined;
    variant: 'warning' | 'default' | 'error' | 'success' | 'info' | undefined;
  };
}

const Notification: React.FC = () => {
  const [notify, setNotify] = React.useState<RootState[]>([]);
  const { enqueueSnackbar } = useSnackbar();

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

export default Notification;
