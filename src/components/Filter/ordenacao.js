import React from 'react'

export default class Ordenacao extends React.Component {
    state = {
        ordem: "crescente"
    }

    render() {

        return(
            <div>
                <h3>Ordenar por:</h3>
                <div value={this.state.ordem}>
                    <select onChange={this.props.onChangeOrdenacao}>
                        <option value="titulo">Título</option>
                        <option value="crescente">Menor valor</option>
                        <option value="decrescente">Maior valor</option>
                        <option value="prazoDecrescente">Maior prazo</option>
                        <option value="prazoCrescente">Menor prazo</option>
                    </select>

                </div>
            </div>
        )
    }
}
                    
