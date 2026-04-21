import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cookies from "universal-cookie";
import Card from "../../components/Card/Card";

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
    let nuevas = this.state.favoritos.filter(fav => fav.id !== id);
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
        <Header />

        <h2 className="alert alert-primary">Películas Favoritas</h2>
        <div className="row">
          {peliculas.length > 0 ? (
            peliculas.map(p => (
              <div className="col-md-3" key={p.id}>
                <Card
                  id={p.id}
                  type={p.type}
                  image={p.image}
                  title={p.title}
                  description={p.description}
                  linkDetalle={"/detalleMovie/" + p.id}
                  enFavoritos={true}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => this.eliminarFavorito(p.id)}
                >
                  💔
                </button>
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
                <Card
                  id={s.id}
                  type={s.type}
                  image={s.image}
                  title={s.title}
                  description={s.description}
                  linkDetalle={"/detalleSerie/" + s.id}
                  enFavoritos={true}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => this.eliminarFavorito(s.id)}
                >
                  💔
                </button>
              </div>
            ))
          ) : (
            <div className="container">
              <p>No hay series favoritas</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Favorites;