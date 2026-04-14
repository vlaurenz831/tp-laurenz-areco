import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Buscador from "../../components/Buscador/Buscador";
import Card from "../../components/Card/Card";
import SeccionSeriePopular from "../../components/SeccionSeriePopular/SeccionSeriePopular";

class Series extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <h2 className="alert alert-primary">Todas las series</h2>
        <Buscador />
        <a href="" className="btn btn-primary">Cargar más</a>
        <SeccionSeriePopular />
        <Footer />

      </div>
    );
  }
}

export default Series;