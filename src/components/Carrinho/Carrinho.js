import React from "react";
import axios from "axios";
import { ContainerCarrinho, CabecalhoCarrinho, ServicosCarrinho, FlexBotao, BoxValor, ValorTotal } from "./styles"

const baseUrl = "https://labeninjas.herokuapp.com";
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e";
const header = {
    headers: {
        Authorization: demoKey
    }
};

export default class Carrinho extends React.Component {

    state = {
        servicos: [],
        produtosNoCarinho: 0
    }


    componentDidMount() {
        this.getJobs()
    }

    componentDidUpdate() {
        this.getJobs()
    }

    calculaTotal = () => {
        let totalPreco = 0
        this.state.servicos.map((servico) => {
            if (servico.taken) {
                totalPreco += servico.price
            }
        })
        return totalPreco
    };

    getJobs = async () => {
        try {
            const res = await axios
                .get(`${baseUrl}/jobs`, header)
            this.setState({ servicos: res.data.jobs })

        }

        catch (err) {
            alert(err)
        }
    }

    removerCarrinho = async (id) => {
        const body = {
            taken: false
        };

        try {
            const res = await axios
                .post(`${baseUrl}/jobs/${id}`, body, header)
            alert("Apagado do carrinho com sucesso");
        }

        catch (err) {
            alert(err)
        }
    }



    render() {


        return (
            <ContainerCarrinho>
                <h2>CARRINHO<hr></hr></h2>
                <CabecalhoCarrinho>
                <h3>Título:</h3> <BoxValor> <h3>Valor:</h3> </BoxValor>
                
                </CabecalhoCarrinho>
                {this.state.servicos.map((servico) => {
                    if (servico.taken) {
                        return <ServicosCarrinho>
                            <CabecalhoCarrinho>
                            <h4>{servico.title}</h4>
                            <BoxValor>
                                <h4>
                                R${servico.price}
                                </h4>
                                </BoxValor>
                            </CabecalhoCarrinho>
                            <FlexBotao>
                            <button onClick={() => this.removerCarrinho(servico.id)}>X</button>
                            </FlexBotao>
                        </ServicosCarrinho>
                    }
                })
                }
                <ValorTotal>
                <h3><hr></hr>VALOR TOTAL: R${this.calculaTotal()}<hr></hr></h3>
                </ValorTotal>

            </ContainerCarrinho>
        )


    }
}
