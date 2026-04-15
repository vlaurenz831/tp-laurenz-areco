import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      success: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === "" || password === "") {
      this.setState({
        error: "Completa todos los campos",
        success: ""
      });
      return;
    }

    let usuarios = localStorage.getItem("users");
    usuarios = usuarios ? JSON.parse(usuarios) : [];

    let existe = usuarios.find((user) => user.email === email);

    if (existe) {
      this.setState({
        error: "El usuario ya existe",
        success: ""
      });
      return;
    }

    let nuevoUsuario = {
      email: email,
      password: password
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("users", JSON.stringify(usuarios));

    this.setState({
      success: "Usuario registrado correctamente",
      error: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <h2 className="alert alert-primary">Registro</h2>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Ingresá tu email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Ingresá tu contraseña"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Registrarse
                </button>
              </form>

              <p className="mt-3 text-center">
                ¿Ya tenés cuenta? <Link to="/Login">Iniciar sesión</Link>
              </p>

              {this.state.error && (
                <p className="mt-2" style={{ color: "red" }}>
                  {this.state.error}
                </p>
              )}

              {this.state.success && (
                <p className="mt-2" style={{ color: "green" }}>
                  {this.state.success}
                </p>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Registro;