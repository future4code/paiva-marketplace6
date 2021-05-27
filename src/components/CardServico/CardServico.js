import React from "react";
import axios from "axios";

const baseUrl = "https://labeninjas.herokuapp.com";
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e";

export default class CardServico extends React.Component {
  state = {
    jobs: [],
    jobSelect: [],
    moreDetais: false
  };

  componentDidMount() {
    this.getAllJobs();
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
    console.log(new Date().toLocaleDateString());
    return this.state.jobs.map((job) => {
      if (job.id === this.state.jobSelect.id && this.state.moreDetais) {
        return (
          <article key={job.id}>
            <h3>{job.title}</h3>
            <h4>{job.price}</h4>
            <button onClick={() => this.handleMoreDetais()}>- Detalhes</button>
            <p>{job.description}</p>
            {job.paymentMethods.map((pay) => {
              return <p key={pay}>{pay}</p>;
            })}
            <p>{job.dueDate}</p>
            <button onClick={() => this.updateJob(job.id)}>Contratar</button>
          </article>
        );
      } else {
        return (
          <article key={job.id}>
            <h3>{job.title}</h3>
            <h4>{job.price}</h4>
            <button onClick={() => this.getJobById(job.id)}>+ Detalhes</button>
            <button onClick={() => this.updateJob(job.id)}>Contratar</button>
          </article>
        );
      }
    });
  }
}