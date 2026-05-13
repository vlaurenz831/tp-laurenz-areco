import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from "universal-cookie";
import {useState} from 'react'

const cookies = new Cookies();

function Card(props) {

    const [textoBoton, setTextoBoton] = useState("Ver mas");
    const [claseOculta, setClaseOculta] = useState("oculta");


    function cambio() {

        if (textoBoton == "Ver mas") {

            setTextoBoton("Ver menos");
            setClaseOculta("");

        } else {

            setTextoBoton("Ver mas");
            setClaseOculta("oculta");

        }
    }


function agregarFavorito() {

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let favoritoNuevo = {
        id: props.id,
        type: props.type,
        image: props.image,
        title: props.title,
        description: props.description
    };

    let yaExiste = favoritos.filter((fav) => fav.id === favoritoNuevo.id).length > 0;

    if (!yaExiste) {
        favoritos.push(favoritoNuevo);
        localStorage.setItem("favoritos",JSON.stringify(favoritos));
    }
}

        let haySesion = cookies.get("user-auth-cookie");
        let botonFav = null;

        if (haySesion && !props.enFavoritos) {
            botonFav = (
             <button className="btn btn-outline-danger boton-corazon" onClick={() => agregarFavorito()}>
                 ❤️
             </button>
    );
}
        return(
            <article className="single-card-movie">
                <img src={props.image} className="card-img-top" alt={props.title}/>
                <div className="cardBody">
                    <h5 className="card-title">{props.title}</h5>
                    <p className={claseOculta + " card-text"}>{props.description}</p>

                    <div className="botones-card">
                    <button onClick={() => cambio()} className="btn btn-secondary">
                        {textoBoton}
                    </button>

                    <Link to={props.linkDetalle}>
                        <button className="btn btn-primary">Ver Detalle</button>
                    </Link>
                    {botonFav}
                    </div>
                </div>
            </article>
        );  
    }


export default Card;