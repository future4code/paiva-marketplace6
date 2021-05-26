import React, { Component } from 'react'
import axios from 'axios';

export default class Filters extends Component {

    render() {
        const listFilter = this.listFilter()
        return (
            <div>
                listFilter={listFilter}
                <input type="text" placeholder="O que você precisa?" value={this.props.nameFilter} onChange={this.props.handleChangeName}></input>
                <button onClick={() => this.handleChangeName()}>Buscar</button>
            </div>
        )
    }
}
