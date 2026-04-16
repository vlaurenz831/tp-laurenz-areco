import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BuscadorPeliculasSeries from "../../components/BuscadorPeliculasSeries/BuscadorPeliculasSeries";
import Card from "../../components/Card/Card";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasBackup: [],
      textoABuscar: ""
    };
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        let peliculasFiltradas = data.results.filter(function(item, idx) {
          return idx < 20;
        });

        this.setState({
          peliculas: peliculasFiltradas,
          peliculasBackup: peliculasFiltradas
        });
      })
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

    filtrarPeliculas(textoAFiltrar) {
    let peliculasFiltradas = this.state.peliculasBackup.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase())
    );

    this.setState({
      peliculas: peliculasFiltradas,
      textoABuscar: textoAFiltrar
    });
  }

   render() {
    return (
        <div className="container">

        <Header />
        <h2 className="alert alert-primary">Todas las peliculas</h2>
        <BuscadorPeliculasSeries filtrarPeliculas={(texto) => this.filtrarPeliculas(texto)} />
        <button className="btn btn-info moviesbutton">Cargar más</button>

      <section className="row cards cards6">
        {this.state.peliculas.length > 0 ? (
          this.state.peliculas.map(pelicula => (
            <Card
              key={pelicula.id}
              id={pelicula.id}
              image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              title={pelicula.title}
              description={pelicula.overview}
              linkDetalle={"/detalleMovie/" + pelicula.id}
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