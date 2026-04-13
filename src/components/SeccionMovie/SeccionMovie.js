import React, { Component } from "react";
import CardMovie from "../Card/Card";

class SeccionMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        let peliculasFiltradas = data.results.filter(function(item, idx) {
          return idx < 4;
        });

        this.setState({
          peliculas: peliculasFiltradas
        });
      })
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

   render() {
    return (
      <section className="row cards">
        {this.state.peliculas.length > 0 ? (
          this.state.peliculas.map(pelicula => (
            <CardMovie
              key={pelicula.id}
              image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              title={pelicula.title}
              description={pelicula.overview}
              link={`movie.html?id=${pelicula.id}`}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    );
  }
}

export default SeccionMovie;