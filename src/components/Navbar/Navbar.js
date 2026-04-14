import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            haySesion: false
        }
    }
    render() {
    return (
         <nav>
            <ul className = "nav nav-tabs my-4">
                <li className   = "nav-item">
                    <Link className = "nav-link" to = "/Home">Home</Link>
                </li>
                <li className = "nav-item">
                    <Link className = "nav-link" to = "/Movies">Peliculas</Link>
                </li>
                <li className = "nav-item">
                    <Link className = "nav-link" to = "/Series">Series</Link>
                </li>
                {this.state.haySesion ?
                <li className = "nav-item">
                    <Link className = "nav-link" to = "/Favorites">Favoritas</Link>
                </li>
                : null}
                {!this.state.haySesion ? 
                <li className = "nav-item ml-auto">
                    <Link className = "nav-link" to = "/Register">Registro</Link>
                </li>
                : null}
                {!this.state.haySesion ?
                <li className = "nav-item">
                   <Link className = "nav-link" to = "/">Login</Link>
                </li>
                : null}
            </ul>
        </nav>
    )
  }
}

export default Navbar;