import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom"
import Cookies from "universal-cookie";
import {useState} from 'react'

const cookies = new Cookies();

function FormRegister(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function controlarCambiosUN(event) {
        setUsername(event.target.value);
    }

    function controlarCambiosE(event) {
        setEmail(event.target.value);
    }

    function controlarCambiosP(event) {
        setPassword(event.target.value);
    }

    function submit(event) {
        event.preventDefault();

        let usuarioACrear = {
        username: username,
        email: email,
        password: password,
        createdAt: Date.now()
        };

        if (username.length < 3 || username.length > 7) {
             setError("La extensión del username debe ser de 3 a 7 caracteres");
          return;
           }

         if (!email.includes("@")) {
             setError("email mal formateado");
          return;
    }

        if (password.length < 5 ||password.length > 12) {
            setError("La extensión del password debe ser de 5 a 12 caracteres");
         return;
    }

        let usersStorage = localStorage.getItem("users"); 

        if (usersStorage!= null) {
            let usersParseado = JSON.parse(usersStorage); 
            let usersFiltrado = usersParseado.filter(function(usuario) {
                return usuario.email === usuarioACrear.email; 
            }); 

           if (usersFiltrado.length > 0) {
                setError("Ya existe un usuario con el email ingresado"); 
                return; }
        
           else {
                usersParseado.push(usuarioACrear); 
                let usuarioJson = JSON.stringify(usersParseado); 
                localStorage.setItem("users", usuarioJson); 
                cookies.set("session", email);
                props.history.push("/login")
            } 

        }
        else {
            let usersInicial = [usuarioACrear]; 
            let usersEnJson = JSON.stringify(usersInicial); 
            localStorage.setItem("users", usersEnJson); 
            cookies.set("session", email);
            props.history.push("/login")
        }
    }

        return (
            <>
            <div className="container"> 
            <Header />

        <h2 className="alert alert-primary">Registro</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(event) => submit(event)}>
                <div class="form-group">
                <label>Nombre de usuario:</label>
                    <input 
                    className="form-control"
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Ingresá tu nombre"
                    onChange={(event) => controlarCambiosUN(event)} 
                    />
                </div>

                <div class="form-group">
                <label>Email:</label>
                    <input 
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Ingresá tu email"
                    onChange={(event) => controlarCambiosE(event)} 
                    />
                </div>

                <label>Contraseña:</label>
                    <input 
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Ingresá tu contraseña"
                    onChange={(event) => controlarCambiosP(event)} 
                    />

                <button type="submit" className="btn btn-primary btn-block mt-3"> 
                    Registrarse 
                </button>
                {error != "" ? <p className="error">{error}</p> : null}
            </form>
              <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link></p>
            </div>
        </div>
        </div>
        </>
        ); 
    }
export default FormRegister;