import React from 'react';
import {Seletor,OrdenacaoContainer} from "./styled";


export default class Ordenacao extends React.Component {
    state = {
        ordem: "crescente"
    }

    render() {

        return(
            <OrdenacaoContainer>
                <div value={this.state.ordem}>
                <h3>Ordenar por:</h3>
                    <h3>
                    <Seletor onChange={this.props.onChangeOrdenacao}>
                        <option value="titulo">Título</option>
                        <option value="crescente">Menor valor</option>
                        <option value="decrescente">Maior valor</option>
                        <option value="prazoDecrescente">Maior prazo</option>
                        <option value="prazoCrescente">Menor prazo</option>
                    </Seletor>
                    </h3>
                </div>
            </OrdenacaoContainer>
        )
    }
}

                    
