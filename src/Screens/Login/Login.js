import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Buscador from "../../components/Buscador/Buscador";

class Login extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <h2 className="alert alert-primary">Iniciar sesion</h2>

      </div>
    );
  }
}

export default Login;

