import styled from "styled-components";
import { createMuiTheme } from '@material-ui/core/styles';

/* export const Produtos = styled.div`
  grid-column: 1 / span 3;
` */

export const CardPequeno = styled.div`
border: 1px solid #3700b3;
margin-top: 10px;
border-radius: 3px;
margin-left: 10px;
padding-left: 10px;
padding-bottom: 10px;
`;

export const CardComDetalhes = styled.div`
border: 1px solid #3700b3;
margin-top: 10px;
border-radius: 3px;
margin-left: 10px;
padding-left: 10px;
padding-bottom: 10px;

.formas-pagamento{
  display: flex;
  justify-content: space-around;
 }
`
export const BotoesSemDetalhes = styled.div`
display:flex;
justify-content: space-around
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

