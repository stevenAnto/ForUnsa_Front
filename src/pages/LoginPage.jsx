import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import '../static/css/login.css'
import { ruta } from "../api/jspost.js";

export function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate= useNavigate();

    const handleLogin = async () => {
        try {
          const response = await axios.post(ruta + 'login_user/', {
            email: email,
            password: password
          });
          localStorage.setItem('user_id', response.data.email)
          setTimeout(() => {
            navigate('/post'); // Redirige a la otra página
          }, 600);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
        <div>     
            <div className="loginBackground">
                <img src="src/static/images/login-background.jpg" width="100%" height="100%" alt=""/>
            </div>
                <div className="login">
                    <h3>Bienvenido</h3>
                    <p><strong>"Un lugar para compartir conocimientos"</strong></p>
                    <img src="src/static/images/unsa.jpg" width="40%" height="40%" alt=""/>
                    <h1></h1>
                    <label>Correo Institucional: </label>
                    <input type="email" id='email' name='email' placeholder='...@unsa.edu.pe' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br></br>
                    <label>Contraseña: </label>
                    <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/> 
                    <br></br>
                    <div className="buttonLogin"></div>
                    <button onClick={handleLogin}>Iniciar Sesión</button>
                    <p><a href="/register">¿Aún no tiene una cuenta?</a></p>
                </div>
        </div>
    )
}