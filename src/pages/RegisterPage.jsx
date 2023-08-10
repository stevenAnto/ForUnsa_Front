import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ruta } from "../api/jspost.js";

export function RegisterPage() {
    const navigate = useNavigate();  
  // User information
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [registrationCode, setRegistrationCode] = useState('');
    // Form Utilites
    const [inputCode, setInputCode] = useState('');
    const [registrationCompleted, setRegistrationCompleted] = useState(false);
    
    const handleRegister = async () => {
      try {
        const response = await axios.post(ruta + 'register_user/', {
          username: username,
          password: password,
          email: email,
        });
        console.log(response.data.registration_code);
        setRegistrationCode(response.data.registration_code);
        setRegistrationCompleted(true);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const handleCompleteRegistration = async () => {
      try {
        const response = await axios.post( ruta + 'complete_registration/', {
          email: email,
          registrationCode: inputCode,
        });
        console.log(response.data.message);
        window.alert("Verificación realizada correctamente")
        setTimeout(() => {
          navigate('/post'); // Redirige a la otra página
        }, 2500);
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
                <img src="src/static/images/unsa.jpg" width="40%" height="40%" alt=""/> <br></br>
                      
                {!registrationCompleted ? (
                  // Mostrar esta porción durante el registro
                  <>
                    <label>Username: </label>
                    <input type="text" id='Username' name='Username' value={username} onChange={(e) => setUserName(e.target.value)}/> 
                    <br></br>
                    <label>Contraseña: </label>
                    <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/> 
                    <br></br>
                    <label>Correo Institucional: </label>
                    <input type="email" id='email' name='email' placeholder='...@unsa.edu.pe' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br></br>
                    <button onClick={handleRegister}>Registrar</button>
                  </>
                ) : (
                  // Mostrar esta porción después del registro
                  <>
                    <label>Código de Verificación: </label>
                    <input type="password" placeholder="Código" value={inputCode} onChange={(e) => setInputCode(e.target.value)} /><br></br>
                    <button onClick={handleCompleteRegistration}>Verificar</button> <br></br>
                  </>
                )}
              </div>
        </div>
    )
}