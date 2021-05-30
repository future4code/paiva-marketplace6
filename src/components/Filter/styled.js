import styled from "styled-components";
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
      main: '#3700b3',
        
      },
      secondary: {
          main: '#292929',
      },
    },
  });

  export const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
