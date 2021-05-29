import CardServico from './components/CardServico/CardServico'
import React from 'react';
import axios from 'axios'
import Header from './components/Header/Header';
import styled from "styled-components";
import FooterPrincipal from './components/Footer/Footer';
import FormCadastroServ from './components/InterfaceServico/FormCadastroServ';
import Filter from './components/Filter/Filter';
import Carrinho from './components/Carrinho/Carrinho';
import Ordenacao from './components/Filter/ordenacao';
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./theme"

const baseUrl = "https://labeninjas.herokuapp.com";
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e";

export default class App extends React.Component {

	state = {
		telaInicial: "inicio",
		jobs: [],
		isLoading: false,
		inputNameFilter: "",
		inputMinFilter: 0,
		inputMaxFilter: Infinity,
		filter: {
			name: "",
			min: 0,
			max: Infinity
		},
		ordem: "titulo"
	}


	componentDidUpdate () {
		this.getAllJobs();
	}


	componentDidMount() {
		this.getAllJobs();
	}

	escolheTela = () => {
		switch (this.state.telaInicial) {
			case "inicio":
				return <div>
					<Filter
						inputNameFilter={this.state.inputNameFilter}
						handleChange={this.handleChange}
						setFilter={this.setFilter}
					/>
					<Ordenacao
						onChangeOrdenacao={this.onChangeOrdenacao}
					/>
					{!this.state.isLoading && this.renderListFiltered()}
					<Carrinho />
				</div>
			case "cadastroProfissional":
				return <FormCadastroServ />
			default:
				return <CardServico />

		}
	}

	irParaInicio = () => {
		this.setState({ telaInicial: "inicio" })
	}

	IrParaCadastroProfissional = () => {
		this.setState({ telaInicial: "cadastroProfissional" })
	}

	onChangeOrdenacao = (event) => {
        this.setState({ ordem: event.target.value });
    }

	getAllJobs = () => {
		const header = {
			headers: {
				Authorization: demoKey
			}
		};

		axios
			.get(`${baseUrl}/jobs`, header)
			.then((rtn) => {
				this.setState({ jobs: rtn.data.jobs });
			})
			.catch((err) => {
				alert("Algo deu errado, tente novamente!");
			});

	};

	handleChange = (name, e) => {
		this.setState(
			{
				[name]: e.target.value
			}
		)
	}

	renderListFiltered = () => {
		let listaFiltrada = this.state.jobs.filter(job =>
			job.title.includes(this.state.filter.name) &&
			job.price >= this.state.filter.min &&
			job.price <= this.state.filter.max)
	
		switch (this.state.ordem) {
			case "crescente":
				listaFiltrada.sort((a, b) => {
					return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
				})
				break;
			case "decrescente":
				listaFiltrada.sort((a, b) => {
					return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
				})
				break;
			case "prazoCrescente":
				listaFiltrada.sort((a, b) => {
					return a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0;
				})
				break;
			case "prazoDecrescente":
				listaFiltrada.sort((a, b) => {
					return a.dueDate > b.dueDate ? -1 : a.dueDate < b.dueDate ? 1 : 0;
				})
				break;
			case "titulo":
				listaFiltrada.sort((a, b) => {
					return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
				})
				break;
		
			default:
				break;
		}

		return listaFiltrada.map((job) => {
			if (job.taken === false) {
				return <CardServico
					id={job.id}
					title={job.title}
					price={job.price}
					description={job.description}
					paymentMethods={job.paymentMethods}
					dueDate={job.dueDate}
				/>
			}
		})
	}

	setFilter = () => {
		this.setState({ isLoading: true })
		this.setState({
			filter: {
				name: this.state.inputNameFilter,
				min: this.state.inputMinFilter,
				max: this.state.inputMaxFilter
			}
		})

		this.setState({ isLoading: false })
	}

	render() {
		return (
			<div>
				<Header
					botaoCadastro={this.IrParaCadastroProfissional}
					botaoInicio={this.irParaInicio}
					estadoTelaInicial={this.state.telaInicial}
				/>
				{this.escolheTela()}
				<FooterPrincipal />
			</div>
		)
	}
}

