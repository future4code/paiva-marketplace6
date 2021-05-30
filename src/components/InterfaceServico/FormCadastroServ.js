import React from 'react'
import axios from 'axios'

import { FormServicos } from './styledServicos'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { theme } from "./styledServicos"
import Button from '@material-ui/core/Button';

import ProfissionaisServicos from '../../imagens/imagem2.png'
import { Checkbox } from '@material-ui/core';

const baseUrl = "https://labeninjas.herokuapp.com"

export default class FormCadastroServ extends React.Component {
    state = {
        inputTitulo: "",
        descricaoServ: "",
        valor: "",
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
                copiaPag = [... this.state.pagamento, pag.value]
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
                this.setState({ valor: "" })
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {
        return (
            <FormServicos>
                <div className="formulario">
                    <div className="input">
                        <TextField label="Título" id="outlined-basic" variant="outlined" defaultValue="Small" size="small" fullWidth
                            placeholder="Seu serviço"
                            value={this.state.inputTitulo}
                            onChange={this.handleInputTitulo}
                        ></TextField>
                    </div>
                    <div className="input">
                        <TextField label="Descrição" id="outlined-textarea" multiline variant="outlined" defaultValue="Small" size="small" fullWidth
                            rows="5"
                            cols="33"
                            value={this.state.descricaoServ}
                            onChange={this.handleDescricaoServ}
                        ></TextField>
                    </div>
                    <div className="input">
                        <TextField label="Valor da remuneração" id="outlined-basic" variant="outlined" defaultValue="Small" size="small" fullWidth
                            type="number"
                            value={this.state.valor}
                            onChange={this.handleValor}
                        ></TextField>
                    </div>


                    <ul>
                        <label>Método(s) de pagamento</label>
                        {this.state.formasPagamento.map((pagamento) => {
                            return (
                                <div className="met-pag">
                                    <FormControlLabel theme={theme} control={<Checkbox color="primary" />} label={pagamento.label} labelPlacement="end"
                                        key={pagamento.id}
                                        onClick={this.handlePagamento}
                                        checked={pagamento.isChecked}
                                        value={pagamento.value}
                                    />
                                </div>
                            )
                        })}
                    </ul>
                    <div className="input">
                        <TextField id="date-picker-dialog" label="Prazo" fullWidth
                            type="date"
                            value={this.state.prazo}
                            onChange={this.handlePrazo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </div>

                    <Button variant="contained" color="primary" size="large" onClick={() => this.createJob()}>Cadastrar</Button>
                </div>
                <div className="imagem">
                    <img src={ProfissionaisServicos}></img>
                </div>

            </FormServicos>
        )
    }

}