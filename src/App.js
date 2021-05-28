import CardServico from './components/CardServico/CardServico'
import React from 'react';
import axios from 'axios'
import { AppContainer } from './components/AppContainer';
import HeaderPrincipal from './components/Header/Header';
import styled from "styled-components";
import FooterPrincipal from './components/Footer/Footer';
import FormCadastroServ from './components/InterfaceServico/FormCadastroServ'
import Filter from './components/Filter/Filter'


const baseUrl = "https://labeninjas.herokuapp.com";
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e";

export default class App extends React.Component {

	state = {
		jobs: [],
		isLoading: false,
		inputNameFilter: "",
		inputMinFilter: 0,
		inputMaxFilter: Infinity,
		filter: {
			name: "",
			min: 0,
			max: Infinity
		}

	}
	componentDidMount() {
		this.getAllJobs();
	}

	getAllJobs = () => {
		this.setState({ isLoading: true })
		const header = {
			headers: {
				Authorization: demoKey
			}
		};

		axios
			.get(`${baseUrl}/jobs`, header)
			.then((rtn) => {
				this.setState({ jobs: rtn.data.jobs });
				this.setState({ isLoading: false })
			})
			.catch((err) => {
				alert("Algo deu errado, tente novamente!");
			});

	};



	handleChange = (name, e) => {
		console.log(name, e.target.value)
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
		return listaFiltrada.map((job) => {
			return <CardServico
				id={job.id}
				title={job.title}
				price={job.price}
				description={job.description}
				paymentMethods={job.paymentMethods}
				dueDate={job.dueDate}
			/>
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


	handleChangeName = (e) => {
		this.setState({ inputNameFilter: e.target.value })
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<HeaderPrincipal />
				<AppContainer />
				<FormCadastroServ />
				<button onClick={() => console.log(this.state)}>teste</button>
				<Filter
					inputNameFilter={this.state.inputNameFilter}
					handleChange={this.handleChange}
					setFilter={this.setFilter}
				/>
				{!this.state.isLoading && this.renderListFiltered()}
				<FooterPrincipal />
			</div>
		)
	}
}


