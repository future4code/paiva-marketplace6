
import React, { Component } from 'react'
import axios from 'axios';

export default class Filters extends Component {

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="O que você precisa?"
          value={this.props.inputNameFilter}
          onChange={(e) => this.props.handleChange('inputNameFilter', e)} />
        <input
          type="number"
          placeholder="Valor Mínimo"
          value={this.props.inputMinFilter}
          onChange={(e) => this.props.handleChange('inputMinFilter', e)} />
        <input
          type="number"
          placeholder="Valor Máximo"
          value={this.props.inputMaxFilter}
          onChange={(e) => this.props.handleChange('inputMaxFilter', e)} />
        <button onClick={() => this.props.setFilter()}>Buscar</button>
      </div>
    )
  }
}