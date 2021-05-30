import styled from "styled-components";
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const HeaderPrincipal = styled.div`
background-color: #e5e5e5;
display: flex;
margin-top: 0;
height: 120px;
justify-content: space-between;
padding-right: 30vw;
align-items: center;
`;

export const TesteBotao = styled(Button)`
background-color:white;
`;

export const Logo = styled.img`
height: 110px;
width: 200px;

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
          
       