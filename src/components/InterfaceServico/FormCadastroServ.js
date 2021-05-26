import React from 'react'
import axios from 'axios'

const baseUrl = "https://labeninjas.herokuapp.com"
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e"

export default class FormCadastroServ extends React.Component {
    state = {
        inputTitulo: "",
        descricaoServ: "",
        valor: -Infinity,
        formasPagamento: [
            { id: 1, label: "Boleto", value: "boleto", isCheck: false },
            { id: 2, label: "Cartão de crédito", value: "credito", isCheck: false },
            { id: 3, label: "Cartão de débito", value: "debito", isCheck: false },
            { id: 4, label: "Pix", value: "pix", isCheck: false },
            { id: 5, label: "Online", value: "online", isCheck: false }
        ],
        pagamento: [],
        prazo: ""
    }

    handleInputTitulo = (e) => {
        this.setState({ inputTitulo: e.target.value })
    }

    handleDescricaoServ = (e) => {
        this.setState({ descricaoServ: e.target.value })
    }

    handleValor = (e) => {
        this.setState({ valor: Number(e.target.value) })
    }

    handlePagamento = (e) => {
        let formasPagamento = this.state.formasPagamento
        let copiaPag = []
        formasPagamento.map(pag => {
            if (pag.value === e.target.value)
            copiaPag = [... this.state.pagamento, pag.value ]
            this.setState({ pagamento: copiaPag })
        })
    }

    handlePrazo = (e) => {
        this.setState({ prazo: e.target.value })
    }

    createJob = () => {
        const header = {
            headers: {
                Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
            }
        }
        const body = {
            title: this.state.inputTitulo,
            description: this.state.descricaoServ,
            price: this.state.valor,
            paymentMethods: this.state.pagamento,
            dueDate: this.state.prazo
        }
        axios
            .post(`${baseUrl}/jobs`, body, header)
            .then(() => {
                alert("Seu servço foi cadastrado com sucesso!")
                this.setState({ inputTitulo: "" })
                this.setState({ descricaoServ: "" })
                this.setState({ valor: -Infinity })
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <label>Título</label>
                    <input
                        placeholder="Seu serviço"
                        value={this.state.inputTitulo}
                        onChange={this.handleInputTitulo}
                    ></input>
                    <label>Descrição</label>
                    <textarea
                        rows="5"
                        cols="33"
                        placeholder="Descreva detalhadamente o serviço oferecido por você ou sua empresa"
                        value={this.state.descricaoServ}
                        onChange={this.handleDescricaoServ}
                    ></textarea>
                    <label>Valor da remuneração</label>
                    <input
                        type="number"
                        value={this.state.valor}
                        onChange={this.handleValor}
                    ></input>
                    
                    <ul>
                        <label>Método(s) de pagamento</label>
                        {this.state.formasPagamento.map((pagamento) => {
                            return (
                                <li>
                                    <label>{pagamento.label}</label>
                                    <input
                                        key={pagamento.id}
                                        onClick={this.handlePagamento}
                                        type="checkbox"
                                        checked={pagamento.isChecked}
                                        value={pagamento.value}
                                    />
                                </li>
                            )
                        })}
                    </ul>

                    <label>Prazo</label>
                    <input
                        placeholder="AAAA/MM/DD"
                        type="date"
                        value={this.state.prazo}
                        onChange={this.handlePrazo}
                    ></input>
                    <button onClick={() => this.createJob()}>Cadastrar</button>
                </div>
                <img></img>
            </div>
        )
    }

}