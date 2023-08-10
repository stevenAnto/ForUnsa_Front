import { ListPost} from "./ListPost";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ChangeTags } from "../static/js/main.js";
import ModalComponent from "./ModalComponent"

export function MidColumn(props){
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {    
    if(props.titulo){
      console.log(props.titulo)
      document.getElementsByName("search")[0].value = props.titulo;
    }
    ChangeTags();
  }, []);
  //{props.mod ? <ListSocialPost /> : <ListPost />}
  const navigate= useNavigate()
    return(
        <div className="midColumn" id="mid" data-mod={props.mod}>
          <div className="midcolumHeader">
            <div className="topMedio">
              <div><a href="/tag/1" >Mi escuela</a></div>
              <div><a href="/all/" >Todos</a></div>
            </div>
            <div className="subTopMedio">
              <div><a href="/popular/" >Popular</a></div>
              <div><a href="/" >Nuevos</a></div>
              {localStorage.getItem('user_id') === null ? (
                <div>
                  <div onClick={handleShow}>Nuevo Post</div>
                  <ModalComponent
                    show={showModal}
                    onHide={handleClose}
                    title="Inicie sesión"
                    content="This is the content of the modal."
                  />
                </div>
                ) : (
                  // Mostrar esta porción después del registro
                  <div onClick={()=>{
                    navigate('/post-create/')
                  }}
                  >Nuevo Post</div>
              )}
              
            </div>
          </div>
          <div className="botMedio">
            <ListPost mod={props.mod} tag={props.tag} titulo={props.titulo}/>
          </div>
        </div>
    );
}

export default MidColumn;