import React from 'react'
import { AppContainer } from './components/AppContainer'
import CardServico from './components/CardServico/CardServico'
import FormCadastroServ from './components/InterfaceServico/FormCadastroServ'

function App() {
	return (
		<div>
			<AppContainer />
			<FormCadastroServ />
			<CardServico />
		</div>
        
	)
}

export default App
