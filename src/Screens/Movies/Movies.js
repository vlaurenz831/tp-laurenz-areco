import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Buscador from "../../components/Buscador/Buscador";
import Card from "../../components/Card/Card";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        let peliculasFiltradas = data.results.filter(function(item, idx) {
          return idx < 6;
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
        <div className="container">

        <Header />
        <h2 className="alert alert-primary">Todas las peliculas</h2>
        <Buscador />
       <button class="btn btn-info moviesbutton">Cargar más</button>

      <section className="row cards cards6">
        {this.state.peliculas.length > 0 ? (
          this.state.peliculas.map(pelicula => (
            <Card
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

      <Footer />

      </div>
    );
  }
}

export default Movies;