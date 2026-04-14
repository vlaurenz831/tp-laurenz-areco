import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Buscador from "../../components/Buscador/Buscador";
import SeccionMoviePopular from "../../components/SeccionMoviePopular/SeccionMoviePopular";
import SeccionMoviePlaying from "../../components/SeccionMoviePlaying/SeccionMoviePlaying";
import SeccionSeriePopular from "../../components/SeccionSeriePopular/SeccionSeriePopular";
import SeccionSerieOnAir from "../../components/SeccionSerieOnAir/SeccionSerieOnAir";

class Home extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <Buscador />
       
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <SeccionMoviePopular />

        <h2 className="alert alert-primary">Movies now playing</h2>
        <SeccionMoviePlaying />

        <h2 className="alert alert-warning">Popular TV shows this week</h2>
        <SeccionSeriePopular />

        <h2 className="alert alert-warning">TV shows airing today</h2>
        <SeccionSerieOnAir />

        <Footer />

      </div>
    );
  }
}

export default Home;