import React from "react";
import axios from "axios";
import styled from 'styled-components'

const baseUrl = "https://labeninjas.herokuapp.com";
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e";
const header = {
    headers: {
        Authorization: demoKey
    }
};

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: flex-end;
`

export default class Carrinho extends React.Component {

    state = {
        servicos: [],
        carrinho: []
    }


    componentDidMount() {
        this.getProdutos()
    }

    componentDidUpdate() {
        this.getProdutos()
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

    getProdutos = async () => {
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
                {this.state.servicos.map((servico) => {
                    if (servico.taken) {
                        return <div>
                            <h3>{servico.title}</h3>
                            <h4>{servico.price}</h4>
                            <button onClick={() => this.removerCarrinho(servico.id)}>X</button>
                        </div>
                    }
                })
                }
                <h5>Total: {this.calculaTotal()}</h5>

            </ContainerCarrinho>
        )


    }
}
