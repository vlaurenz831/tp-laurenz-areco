import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoBoton: "Ver mas",
            claseOculta: "oculta"
        };
    }

    cambio() {
        if (this.state.textoBoton == "Ver mas") {
            this.setState({
                textoBoton: "Ver menos",
                claseOculta: ""
            });
        } else {
            this.setState({
                textoBoton: "Ver mas",
                claseOculta: "oculta"
            });
        }
    }

    agregarFavorito() {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        let existe = favoritos.find(f => f.id === this.props.id);

        if (!existe) {
            favoritos.push({
                id: this.props.id,
                type: this.props.type,
                title: this.props.title,
                image: this.props.image,
                description: this.props.description
            });
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }
    }

    render() {
        let haySesion = cookies.get("user-auth-cookie");
        let botonFav = null;

        if (haySesion) {
            botonFav = (
                <button className="btn btn-outline-danger" onClick={() => this.agregarFavorito()}>
                    ❤️
                </button>
            );
        }

        return(
            <article className="single-card-movie">
                <img src={this.props.image} className="card-img-top" alt={this.props.title}/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className={this.state.claseOculta + " card-text"}>{this.props.description}</p>

                    <button onClick={() => this.cambio()} className="btn btn-secondary">
                        {this.state.textoBoton}
                    </button>

                    <Link to={this.props.linkDetalle}>
                        <button className="btn btn-primary">Ver Detalle</button>
                    </Link>

                    {botonFav}
                </div>
            </article>
        );  
    }
}

export default Card;