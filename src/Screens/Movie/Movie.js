import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Movie extends Component {
  constructor(props){
    super(props)
    this.state = {
      pelicula: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pelicula: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.pelicula === null) {
      return <p>Cargando...</p>;
    }

    return (
      <div className="container">
        <Header />
        <h2 className="alert alert-primary">{this.state.pelicula.title}</h2>

        <section className="row">
          <img
          className="col-md-6"
          src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`}
          alt={this.state.pelicula.title}/>
            <section className="col-md-6 info">
              <h3>Descripción</h3>
              <p className="description">{this.state.pelicula.overview}</p>
              <p className="mt-0 mb-0"><strong>Fecha de estreno: </strong>{this.state.pelicula.release_date}</p>
              <p className="mt-0 mb-0 lenght"><strong>Duracion: </strong>{this.state.pelicula.runtime}</p>
              <p className="mt-0" id="votes"><strong>Puntuación:</strong>{this.state.pelicula.vote_average}</p>
            </section>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Movie;