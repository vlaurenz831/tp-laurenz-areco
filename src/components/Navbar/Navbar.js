import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";

function Navbar() {
  const cookies = new Cookies();
  let haySesion = cookies.get("user-auth-cookie");

  return (
    <nav>
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <Link className="nav-link" to="/Home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Movies">Peliculas</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Series">Series</Link>
        </li>

        {haySesion ? (
          <li className="nav-item">
            <Link className="nav-link" to="/favoritos">Favoritos</Link>
          </li>
        ) : null}

        {!haySesion ? (
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/Register">Registro</Link>
          </li>
        ) : null}

        {!haySesion ? (
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;