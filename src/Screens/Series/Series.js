import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BuscadorPeliculasSeries from "../../components/BuscadorPeliculasSeries/BuscadorPeliculasSeries";
import Card from "../../components/Card/Card";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      seriesBackup: [],
      textoABuscar: "",
      pagina: 1
    };
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          series: data.results,
          seriesBackup: data.results
        });
      })
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

cargarMas() {
  const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";
  let nuevaPagina = this.state.pagina + 1;

  fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey + "&page=" + nuevaPagina)
    .then(response => response.json())
    .then(data => {

      let seriesActuales = this.state.series;

      data.results.map((serie) => {
        seriesActuales.push(serie);
      });

      this.setState({
        series: seriesActuales,
        seriesBackup: seriesActuales,
        pagina: nuevaPagina
      });

    })
    .catch(error => console.log(error));
}

  filtrarSeries(textoAFiltrar) {
    let seriesFiltradas = this.state.seriesBackup.filter((serie) =>
      serie.name.toLowerCase().includes(textoAFiltrar.toLowerCase())
    );

    this.setState({
      series: seriesFiltradas,
      textoABuscar: textoAFiltrar
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h2 className="alert alert-warning">Todas las series</h2>
        <BuscadorPeliculasSeries filtrarPeliculas={(texto) => this.filtrarSeries(texto)} />
        <button className="btn btn-info moviesbutton" onClick={() => this.cargarMas()}>Cargar más</button>

        <section className="row cards cards6">
          {this.state.series.length > 0 ? (
            this.state.series.map(serie => (
              <Card
                key={serie.id}
                id={serie.id}
                type="tv"
                image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                title={serie.name}
                description={serie.overview}
                linkDetalle={"/detalleSerie/" + serie.id}
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

export default Series;
