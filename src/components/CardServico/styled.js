import styled from "styled-components";
import { createMuiTheme } from '@material-ui/core/styles';

export const CardPequeno = styled.article`
border: 1px solid #3700b3;
margin-bottom: 10px;
border-radius: 3px
`;

export const CardComDetalhes = styled.article`
border: 1px solid #3700b3;
margin-bottom: 10px;
border-radius: 3px
`;


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

