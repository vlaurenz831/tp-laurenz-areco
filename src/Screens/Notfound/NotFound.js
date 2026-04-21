import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <div className="container">
    <Header/>
    <div className="container text-center">
      <div className="my-5">
        <h2 className="alert alert-danger">404 - Página no encontrada</h2>
        <p>La página que estás buscando no existe.</p>
        <Link to="/" className="btn btn-primary">Volver al Home</Link>
      </div>
      <Footer/>
    </div>
    </div>
    </>
  );
}

export default NotFound;