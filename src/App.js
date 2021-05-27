import React from 'react';
import { AppContainer } from './components/AppContainer';
import HeaderPrincipal from './components/Header/Header';
import styled from "styled-components";
import FooterPrincipal from './components/Footer/Footer';
import FormCadastroServ from './components/InterfaceServico/FormCadastroServ'

export default class App extends React.Component {
render() {
	return (
		<div>
			<AppContainer />
			<FormCadastroServ />
		</div>
	)
	}
}


