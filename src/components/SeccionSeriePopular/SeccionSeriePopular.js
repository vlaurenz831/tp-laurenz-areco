import React, { Component } from "react";
import Card from "../Card/Card";

class SeccionSeriePopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    };
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        let seriesFiltradas = data.results.filter(function(item, idx) {
          return idx < 5;
        });

        this.setState({
          series: seriesFiltradas
        });
      })
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

  render() {
    return (
      <section className="row cards cards5">
        {this.state.series.length > 0 ? (
          this.state.series.map(serie => (
            <Card
              key={serie.id}
              image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              title={serie.name} 
              description={serie.overview}
              id={serie.id}
              linkDetalle={"/detalleSerie/" + serie.id}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    );
  }
}

export default SeccionSeriePopular;