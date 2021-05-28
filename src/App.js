import CardServico from './components/CardServico/CardServico'
import React from 'react';
import { AppContainer } from './components/AppContainer';
import Header from './components/Header/Header';
import styled from "styled-components";
import FooterPrincipal from './components/Footer/Footer';
import FormCadastroServ from './components/InterfaceServico/FormCadastroServ'
import Carrinho from './components/Carrinho/Carrinho';

export default class App extends React.Component {
state = {
		telaInicial : "inicio"
	}

	escolheTela = () =>{
		switch(this.state.telaInicial){
			case "inicio":
				return <CardServico />
			case "cadastroProfissional":
				return <FormCadastroServ />
			default:
				return <CardServico />	
	
		}
	}
	irParaInicio = () => {
		this.setState ({telaInicial: "inicio"})
	}
	IrParaCadastroProfissional = () =>{
		this.setState ({telaInicial:"cadastroProfissional"})
	}

render() {
	return (
		<div>
			<Header 
			botaoCadastro = {this.IrParaCadastroProfissional}
			botaoInicio = {this.irParaInicio}
			estadoTelaInicial = {this.state.telaInicial}
			/>
			{this.escolheTela()}
			<FooterPrincipal/>
			<AppContainer />
			<FormCadastroServ />
			<CardServico />
			<Carrinho />
		</div>
	)}	
}

