import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const theme: Theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: ['Proxima Nova Rg'].join(','),
  },
  palette: {
    primary: {
      main: '#76B041',
    },
    secondary: {
      main: '#E3E3EB',
    },
  },
});

export default theme;
