import { useEffect, useState } from "react";
import { getOnly } from "../api/jspost";

export function TarjetaComentario(props){
    let com= props.com;
    const fecha = new Date(com.updated_at);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric' });
    
    const [datos, setDatos]= useState([]);
    useEffect (() => {
      async function loadDatos(){
        const res = await getOnly('user', com.user);
        setDatos(res.data);
      }
      loadDatos();
    }, []);

    return(
        <div className="comment">
            <div className="fotoPerfil">
                <img src={datos.img} className="fotoPerfilTarjeta" alt="foto de Usuario"/>
            </div>
            <div className="NombreFecha">
                  <div className="nombre">
                    {datos.username}
                  </div>
                  <div className="fechaPublicacion">
                    {fechaFormateada}
                  </div>
            </div>
            <div>
                {com.content}
            </div>
        </div>
    );
}