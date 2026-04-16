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
        <h2 className="alert alert-warning">{this.state.serie.name}</h2>

        <section className="row">
          <section className="col-md-6 info">
            <h3>Descripción</h3>
            <p className="description"> {this.state.serie.overview}</p>
            <p className="mt-0 mb-0"><strong>Fecha de estreno: </strong>{this.state.serie.first_air_date}</p>
            <p className="mt-0 mb-0 length"><strong>Duracion: </strong>{this.state.serie.episode_run_time}</p>
            <p className="mt-0"><strong>Puntuacion: </strong>{this.state.serie.vote_average}</p>
          </section>
         <img 
          className="col-md-6" 
          src={`https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`} 
          alt={this.state.serie.title}/>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Serie;