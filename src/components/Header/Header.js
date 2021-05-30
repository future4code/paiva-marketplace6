import React from 'react';
import styled from "styled-components";
import logoLabeNinjas from "../../imagens/labeninjas.png";
import {HeaderPrincipal, TesteBotao, Logo} from "./styled";
import Button from '@material-ui/core/Button';
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./styled"

export default class Header extends React.Component {
    
    render (){
    return (
        <ThemeProvider theme={theme}>
         <HeaderPrincipal>
             <Logo src={logoLabeNinjas} alt="Logo" />
             <div>
             {this.props.estadoTelaInicial === "inicio"  && (
				<Button variant="outlined" color="primary" onClick={this.props.botaoCadastro} >CADASTRO PROFISSIONAL</Button>
			)}
            {this.props.estadoTelaInicial === "cadastroProfissional" && (
				<Button variant="outlined" color="primary" onClick={this.props.botaoInicio}> BUSCA DE SERVIÇOS </Button>
			)}


             </div>
           
         </HeaderPrincipal> 
        </ThemeProvider>
        );
             
    }
}