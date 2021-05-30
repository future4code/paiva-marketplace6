import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import {CardPequeno, CardComDetalhes, BotoesSemDetalhes} from "./styled"

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
    return (this.props.id === this.state.jobSelect.id && this.state.moreDetais) ? 
        (
          <div>
            <CardComDetalhes key={this.props.id}>
              <h3>{this.props.title}</h3>
              <h4>R$ {this.props.price},00</h4>
              <Button variant="contained" color="primary" size="small" onClick={() => this.handleMoreDetais()}>- Detalhes</Button>
              <p>{this.props.description}</p>
              <p><strong>Formas de pagamento:</strong></p>
              <div className="formas-pagamento">
                {this.props.paymentMethods.map((pay) => {
                  return <p key={pay}>{pay}</p>;
                })}
              </div>
              
              <p>{`${this.props.dueDate.substr(8, 2)}/${this.props.dueDate.substr(5, 2)}/${this.props.dueDate.substr(0, 4)}`}</p>
              <Button variant="contained" color="primary" size="small" onClick={() => this.updateJob(this.props.id)}>Contratar</Button>
            </CardComDetalhes>
          </div>
        ) :
        (
          <div>
            <CardPequeno key={this.props.id}>
              <h3>{this.props.title}</h3>
              <h4>R$ {this.props.price},00</h4>
              <BotoesSemDetalhes>
              <Button variant="contained" color="primary" size="small" onClick={() => this.getJobById(this.props.id)}>+ Detalhes</Button>
              <Button variant="contained" color="primary" size="small" onClick={() => this.updateJob(this.props.id)}>Contratar</Button>
              </BotoesSemDetalhes>
            </CardPequeno>
          </div>
        );
  }
}