import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: true
    };
  }

  componentDidMount() {
    this.buscarPeliculas();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.buscarPeliculas();
    }
  }

  buscarPeliculas() {
    const query = this.props.match.params.query;
    const apiKey = "c183e27f4cd7ef72ce91a2388fa9e5ac";

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          resultados: data.results || [],
          cargando: false
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <section className="my-5">
          <h2 className="alert alert-primary">
            Resultados para: {this.props.match.params.query}
          </h2>

          {this.state.cargando ? (
            <p>Cargando...</p>
          ) : (
            <section className="row cards cards6">
              {this.state.resultados.map((pelicula, index) => (
                <Card
                  key={index}
                  id={pelicula.id}
                  type="movie"
                  image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                  title={pelicula.title}
                  description={pelicula.overview}
                  linkDetalle={"/detalleMovie/" + pelicula.id}
                />
              ))}
            </section>
          )}
        </section>

        <Footer />
      </div>
    );
  }
}

export default Results;