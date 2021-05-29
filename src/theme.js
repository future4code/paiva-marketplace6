import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#3700b3',
        main: '#6200ee',
        dark: '#292929',
        contrastText: '#121212',
      },
      secondary: {
        light: '#e5e5e5',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });