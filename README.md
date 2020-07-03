## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn generate`

Generate Component/COntainer templates for your app. Run yan generate and choose one of the options.
When creating a container the corresponding reducer action and type file will be created.The reducer will have to
be manually added to the store config

## Features

### Absolute Imports

If you want to import a module located at src/components/Button.js, you can import the module like so:

```javaScript

import Button from 'components/Button';

```

## Components

### Notification

To show notification dispatch the action showNotification and pass in the params you need

```javaScript

/*
Payload  should be in this format {
  message: String;
  options: {
    key: number | undefined;
    variant: 'warning' | 'default' | 'error' | 'success' | 'info' | undefined;
  };
}

*/
import {showNotification} from 'store/AppNotification/action';

dispatch(showNotification({
    message: 'Failed fetching data.',
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'warning',
    },
}))

```

To change the position of the notification change the anchorOrigin in <SnackbarProvider/>

```javaScript

<SnackbarProvider
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
    }}
>
    <App />
</SnackbarProvider>

```
