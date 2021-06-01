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
  
  export const Seletor = styled.select`
  -webkit-appearance: none;
  background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee;
  background-position: 120px center;
  width: 150px;
  height:30px;
  border:1px solid #ddd;
  border-radius: 5px;
  font-size: medium;
  `;

export const OrdenacaoContainer = styled.div`
margin-left: 15px;
`;