import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const FormServicos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 70vh;
    padding: 20px;
    

    .formulario {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px;
    }
    .input {
        margin-bottom: 10px;
        width: 100%;
    }

    .imagem {
        display: flex;
        align-items: center;
        margin: 10px;
    }

    ul {
        padding: 0;
        margin-bottom: 10px;
        //display: flex;
    }

    #outlined-basic {
        width: 100%;
    }
`
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