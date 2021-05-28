import React from 'react';
import styled from "styled-components";
import logoLabeNinjas from "../../imagens/labeninjas.png";
import CardServico from '../CardServico/CardServico';
import FormCadastroServ from '../InterfaceServico/FormCadastroServ';
import {HeaderPrincipal, ButtonCadastro, Logo} from "./styled"

export default class Header extends React.Component {
    
    render (){
    return (
        <div>
         <HeaderPrincipal>
             <Logo src={logoLabeNinjas} alt="Logo" />
             <div>
             
             
             {this.props.estadoTelaInicial === "inicio"  && (
				<ButtonCadastro onClick={this.props.botaoCadastro} >CADASTRO PROFISSIONAL</ButtonCadastro>
			)}
            {this.props.estadoTelaInicial === "cadastroProfissional" && (
				<ButtonCadastro onClick={this.props.botaoInicio}> BUSCA DE SERVIÇOS </ButtonCadastro>
			)}


             </div>
           
         </HeaderPrincipal> 
        </div>
        );
             
    }
}