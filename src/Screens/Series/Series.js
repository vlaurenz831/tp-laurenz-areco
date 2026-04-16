import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BuscadorPeliculasSeries from "../../components/BuscadorPeliculasSeries/BuscadorPeliculasSeries";
import Card from "../../components/Card/Card";
import SeccionSeriePopular from "../../components/SeccionSeriePopular/SeccionSeriePopular";


class Series extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <h2 class="alert alert-warning">Todas las series</h2>
        <BuscadorPeliculasSeries filtrarPeliculas={() => {}} />
        <button class="btn btn-warning moviesbutton">Cargar más</button>
        <SeccionSeriePopular />
        <Footer />

      </div>
    );
  }
}

export default Series;