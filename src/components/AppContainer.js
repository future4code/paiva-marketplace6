import React, { Component } from 'react'
import Filters from './Filters'

export class AppContainer extends Component {

  state = {
    minFilter: 0,
    maxFilter: 10000,
    nameFilter: ""
  }

  handleChangeName = (e) => {
    this.setState({ nameFilter: e.target.value })
  }

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
