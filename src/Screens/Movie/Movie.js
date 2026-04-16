import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Movie extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id,
      pelicula: null
    }
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${apiKey}`)
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

        <section>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title}/>
            <h3>Descripción</h3>
            <p>{this.state.pelicula.overview}</p>
            <p> Fecha de estreno:</p> {this.state.pelicula.release_date}
            <p> Duracion: </p> {this.state.pelicula.runtime} minutos
            <p> Puntuacion</p>{this.state.pelicula.vote_average}
        </section>

        <Footer />
      </div>
    );
  }
}

export default Movie;