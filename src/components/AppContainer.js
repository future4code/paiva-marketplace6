import React, { Component } from 'react'
import Filters from './Filters'

const baseUrl = "https://labeninjas.herokuapp.com"
const demoKey = "e2190c39-7930-4db4-870b-bed0e5e4b88e"

export class AppContainer extends Component {

  render() {
    return (
      <div>
        <Filters
          nameFilter={this.state.nameFilter}
          handleChangeName={this.handleChangeName}
        />
      </div>
    )
  }
}
