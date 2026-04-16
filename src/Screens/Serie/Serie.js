import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Serie extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id,
      serie: null
    }
  }

  componentDidMount() {
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          serie: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.serie === null) {
      return <p>Cargando...</p>;
    }

    return (
      <div className="container">
        <Header />
        <h2 className="alert alert-primary">{this.state.serie.name}</h2>

        <section>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`} alt={this.state.serie.title}/>
            <h3>Descripción</h3>
            <p>{this.state.serie.overview}</p>
            <p> Fecha de estreno:</p> {this.state.serie.release_date}
            <p> Duracion: </p> {this.state.serie.runtime} minutos
            <p> Puntuacion</p>{this.state.serie.vote_average}
        </section>

        <Footer />
      </div>
    );
  }
}

export default Serie;