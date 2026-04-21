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
      textoABuscar: "",
      pagina: 1
    };
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        

        this.setState({
          peliculas: data.results,
          peliculasBackup: data.results
        });
      })
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

  cargarMas() {
  const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";
  let nuevaPagina = this.state.pagina + 1;

  fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&page=" + nuevaPagina)
    .then(response => response.json())
    .then(data => {

      let peliculasActuales = [...this.state.peliculas];

      data.results.map((pelicula) => {
        peliculasActuales.push(pelicula);
      });

      this.setState({
        peliculas: peliculasActuales,
        peliculasBackup: peliculasActuales,
        pagina: nuevaPagina
      });

    })
    .catch(error => console.log(error));
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
        <button className="btn btn-info moviesbutton" onClick={() => this.cargarMas()}>Cargar más</button>

      <section className="row cards cards6">
        {this.state.peliculas.length > 0 ? (
          this.state.peliculas.map(pelicula => (
            <Card
              key={pelicula.id}
              id={pelicula.id}
              type="movie"
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