import React, { Component } from "react";
import { withRouter } from "react-router-dom";



class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: ""
    };
  }

evitarSubmit(event){
  event.preventDefault();

  this.props.history.push(`/search/${this.state.valor}`);
}

  controlarCambios(event) {
    this.setState({
      valor: event.target.value
    });
  }

  render() {
    return (
      <form
        className="search-form"
        onSubmit={(event) => this.evitarSubmit(event)} 
      >
        <input
          type="text"
          value={this.state.valor}
          onChange={(event) => this.controlarCambios(event)}
          placeholder="Buscar..."
        />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    );
  }
}

export default withRouter(SearchForm);