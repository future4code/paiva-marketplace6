import styled from "styled-components"



export const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
width: 30%;
position: absolute;
top: 20vh;
left: 60vw;
border: 1px solid #6200ee;
background-color: #e5e5e5;
text-align: center;
padding: 3vw;
`

export const FlexBotao = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
`

export const CabecalhoCarrinho = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
`

export const BoxValor = styled.div`
width: 15%;
`

export const ServicosCarrinho = styled.div`
display: flex;
width: 100%;

button {
    height: 2.5vh;
    background-color: white;
    font-weight: 800;
    border: 1px solid black;
}
`
export const ValorTotal = styled.div`
padding-top: 4vh;
`