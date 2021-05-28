import React from "react";
import axios from "axios";
import Filter from "../Filter/Filter"

const baseUrl = "https://labeninjas.herokuapp.com";
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e";

export default class CardServico extends React.Component {
  state = {
    jobSelect: [],
    moreDetais: false,
  };

  getJobById = (id) => {
    const header = {
      headers: {
        Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
      }
    };

    axios.get(`${baseUrl}/jobs/${id}`, header).then((rtn) => {
      this.setState({ jobSelect: rtn.data });
      this.setState({ moreDetais: true });
    });
  };

  handleMoreDetais = () => {
    this.setState({ moreDetais: false });
  };

  updateJob = (id) => {
		const header = {
			headers: {
				Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
			}
		};
		const body = {
			taken: true
		};
		axios
			.post(`${baseUrl}/jobs/${id}`, body, header)
			.then((msg) => {
				alert("Reserva de serviço realizada com sucesso!");
			})
			.catch((err) => {
				alert(err);
			});
	};
  render() {
    console.log(this.props)
    return (this.props.id === this.state.jobSelect.id && this.state.moreDetais) ? 
        (
            <article key={this.props.id}>
              <h3>{this.props.title}</h3>
              <h4>{this.props.price}</h4>
              <button onClick={() => this.handleMoreDetais()}>- Detalhes</button>
              <p>{this.props.description}</p>
              {this.props.paymentMethods.map((pay) => {
                return <p key={pay}>{pay}</p>;
              })}
              <p>{this.props.dueDate}</p>
              <button onClick={() => this.updateJob(this.props.id)}>Contratar</button>
            </article>

        ) :
        (
          <div>
            <article key={this.props.id}>
              <h3>{this.props.title}</h3>
              <h4>{this.props.price}</h4>
              <button onClick={() => this.getJobById(this.props.id)}>+ Detalhes</button>
              <button onClick={() => this.updateJob(this.props.id)}>Contratar</button>
            </article>
          </div>
        );
  }
}