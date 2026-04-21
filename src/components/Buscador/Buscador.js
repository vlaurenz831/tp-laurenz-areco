import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "",
      tipo: "movie"
    };
  }

  evitarSubmit(event){
    event.preventDefault();

    if (this.state.tipo === "movie") {
      this.props.history.push(`/search/movie/${this.state.valor}`);
    } else {
      this.props.history.push(`/search/tv/${this.state.valor}`);
    }
  }

  controlarCambios(event) {
    this.setState({
      valor: event.target.value
    });
  }

  cambiarTipo(tipoNuevo) {
    this.setState({
      tipo: tipoNuevo
    });
  }

  render() {
    return (
      <form
        className="search-form"
        onSubmit={(event) => this.evitarSubmit(event)} 
      >
        <button 
        type="button" 
        onClick={() => this.cambiarTipo("movie")} 
        className= {this.state.tipo === "movie" ? "boton activo" : "boton"}>
          Películas
        </button>

        <button 
        type="button" 
        onClick={() => this.cambiarTipo("tv")}
        className={this.state.tipo === "tv" ? "boton activo" : "boton"}>
          Series
        </button>

        <input
          type="text"
          value={this.state.valor}
          onChange={(event) => this.controlarCambios(event)}
          placeholder="Buscar..."
        />

        <button type="submit" className="btn btn-success btn-sm">
          Buscar
        </button>
      </form>
    );
  }
}

export default withRouter(Buscador);