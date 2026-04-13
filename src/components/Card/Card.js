import React from 'react';

function Card(props) {
    return(
            <article className="single-card-movie">
                <img src={props.image} className="card-img-top" alt={props.title}/>
                <div className="cardBody">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.link} className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    );  
}

export default Card;
