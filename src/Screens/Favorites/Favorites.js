import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: []
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("favoritos")) || [];
    this.setState({ favoritos: data });
  }

  eliminarFavorito(id) {
    let nuevas = this.state.favoritas.filter(fav => fav.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(nuevas));
    this.setState({ favoritos: nuevas });
  }

  render() {
    let haySesion = cookies.get("user-auth-cookie");
    if (!haySesion) {
      return <p>No tenés acceso. Iniciá sesión.</p>;
    }
    let peliculas = this.state.favoritos.filter(f => f.type === "movie");
    let series = this.state.favoritos.filter(f => f.type === "tv");

    return (
      <div className="container">
        <Header/>
        <h2 className="alert alert-primary">Películas Favoritas</h2>
        <div className="row">
          {peliculas.length > 0 ? (
            peliculas.map(p => (
              <div className="col-md-3" key={p.id}>
                <img src={p.image} alt={p.title} className="card-img-top"/>
                <div className="cardBody">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                  <Link to={`/pelicula/${p.id}`} className="btn btn-primary">Ver más</Link>
                  <button className="btn btn-outline-danger" onClick={() => this.eliminarFavorito(p.id)}>💔</button>
                </div>
              </div>
            ))
          ) : (
            <div className="container">
              <p>No hay películas favoritas</p>
            </div>
          )}
        </div>
        <h2 className="alert alert-warning mt-4">Series Favoritas</h2>
        <div className="row">
          {series.length > 0 ? (
            series.map(s => (
              <div className="col-md-3" key={s.id}>
                <img src={s.image} alt={s.title} className="card-img-top"/>
                <div className="cardBody">
                  <h5>{s.title}</h5>
                  <p className="card-text">{s.description}</p>
                  <Link to={`/serie/${s.id}`} className="btn btn-primary">Ver más</Link>
                  <button className="btn btn-outline-danger" onClick={() => this.eliminarFavorito(s.id)}>💔</button>
                </div>
              </div>
            ))
          ) : (
            <div className="container">
              <p>No hay series favoritas</p>
            </div>
          )}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Favorites;