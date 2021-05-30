import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./styled"

export default class Filters extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TextField id="outlined-basic"  variant="outlined" defaultValue="Small" size="small"
          type="text"
          placeholder="O que você precisa?"
          value={this.props.inputNameFilter}
          onChange={(e) => this.props.handleChange('inputNameFilter', e)} />
        < TextField
          id="outlined-number"
          defaultValue="Small" size="small"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        
          type="number"
          placeholder="Valor Mínimo"
          value={this.props.inputMinFilter}
          onChange={(e) => this.props.handleChange('inputMinFilter', e)} />
        < TextField
          id="outlined-number"
          defaultValue="Small" size="small"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        
          type="number"
          placeholder="Valor Máximo"
          value={this.props.inputMaxFilter}
          onChange={(e) => this.props.handleChange('inputMaxFilter', e)} />
        <Button variant="contained" color="primary" size="large" onClick={() => this.props.setFilter()}>Buscar</Button>
        </ThemeProvider>
    )
  }
}
