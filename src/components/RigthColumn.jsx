import { ListTags } from "./ListTag";
import { indexTag } from "../static/js/main.js";

export function RigthColumn(){  
  const busqueda = () => {
    let indice= indexTag();
    if(indice ==0){
      window.alert('No es un tag válido');
      return;
    }
    window.location.href ="/tag/" + indice;
  }; 
    return(
        <div className="rigthColumn">
            <div className="columnside">
          <div className="containerTags">
            <div>Buscar por Tag</div>
            <div className="barraBuscarTag">
              <ListTags/>             
              <i className="fa fa-search" onClick={busqueda}></i>
            </div>
            
            <div className="tags">
              <a href="/tag/2">Calculo </a>
              <a href="/tag/1">Ing. de Sistemas </a>
              <a href="/tag/3">Programacion </a>
            </div>
          </div>
          <div className="containerPreguntas">
            <div className="preguntasFrecuentas">Preguntas Frecuentes</div>
            <ul>
              <li>Que es Forounsa</li>
              <li>Cuales son nuestros objetivos</li>
              <li>Que es un post</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
            </ul>
          </div>
        </div>
        </div>
    );
}

export default RigthColumn;
