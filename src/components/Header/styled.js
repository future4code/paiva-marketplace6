import styled from "styled-components";
import { createMuiTheme } from '@material-ui/core/styles';

export const HeaderPrincipal = styled.div`
background-color: #e5e5e5;
display: flex;
margin-top: 0;
height: 120px;
justify-content: space-between;
`;

export const Logo = styled.img`
height: 110px;
width: 200px;

`;

export const ButtonCadastro = styled.button`
margin-right: 30vw;
margin-top: 40px;
align-content: center;

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
          
       