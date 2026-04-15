import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class BuscadorPeliculasSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valor: ''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.valor}`);
  }

  controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

  render() {
    return (
    <form className="filter-form px-0 mb-3" onSubmit={(event)=>this.evitarSubmit(event)}>
        <input type="text" placeholder="Buscar dentro de la lista" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
    </form>
    );
  }
}


export default withRouter(BuscadorPeliculasSeries);