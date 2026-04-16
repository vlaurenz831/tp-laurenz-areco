import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Card(props) {
    return(
            <article className="single-card-movie">
                <img src={props.image} className="card-img-top" alt={props.title}/>
                <div className="cardBody">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Link to={props.linkDetalle}> <button className="btn btn-primary"> Ver Mas </button> </Link>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    );  
}

export default Card;
