import CardServico from './components/CardServico/CardServico'
import React from 'react';
import { AppContainer } from './components/AppContainer';
import HeaderPrincipal from './components/Header/Header';
import styled from "styled-components";
import FooterPrincipal from './components/Footer/Footer';
import FormCadastroServ from './components/InterfaceServico/FormCadastroServ'
import Carrinho from './components/Carrinho/Carrinho';

export default class App extends React.Component {
render() {
	return (
		<div>
			<AppContainer />
			<FormCadastroServ />
			<CardServico />
			<Carrinho />
		</div>
	)
	}
}


