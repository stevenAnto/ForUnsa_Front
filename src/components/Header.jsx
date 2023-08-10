import logo from "/src/static/images/LogoForUnsa.png";
import '../static/css/Dropdown.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalComponent from "./ModalComponent"
import { ruta } from "../api/jspost.js";

export function Header() {
     
  const navigate= useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'logout') {
      handleLogOut();
    }
  };
  
  const handleIconClick = () => {
    setIsMenuVisible(!isMenuVisible); // Cambiar la visibilidad del menú al hacer clic en el icono
  };
  const handleLogOut = () => {
    // Ejecuta la función específica para la opción seleccionada
    localStorage.removeItem('user_id')
    window.location.reload();
  };
  const busqueda = () => {
    let cadena= document.getElementsByName("search")[0].value;
    window.location.href ="/search/" + cadena;
  };

    return(
        <div className="header">
            <div className="headerChild">
                <div className="logo">
                    <div className="LogoForUnsa">
                        <a href="/">
                            <img src={logo} width="70px" alt="logo ForUnsa" />
                        </a>
                    </div>
                </div>
                <div className="busqueda">
                    <div className="busquedaBarra">
                        <input className="busquedaTop" type="text" placeholder="Search..." name="search" />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            <div className="iconos">
                <div className="interiorIcones">
                  <div className="i">
                      <a href="/">
                      <i className="fa-solid fa-house hover-effect d-none d-md-inline"></i>
                      </a>                    
                  </div>
                  <div className="i">
                      <i className="fa-regular fa-circle-question"></i>
                  </div>
                  <div className="i">
                      <a href="/social">
                      <i className="fa-solid fa-user-group hover-effect  d-none d-md-inline"></i>
                      </a>
                  </div>
                  <div className="i">
                      <i className="fa-regular fa-message hover-effect  d-none d-md-inline"></i>
                  </div>
                  <div className="dropdown-container" className="i">
                  {localStorage.getItem('user_id') === null ? (
                      <div>
                      <i
                          className="far fa-circle-user hover-effect d-none d-md-inline fa-2x"
                          id="login"
                          onClick={handleShow} // Agregar el evento de clic al icono
                      ></i>
                      <ModalComponent
                          show={showModal}
                          onHide={handleClose}
                          title="Inicie sesión"
                          content="This is the content of the modal."
                      />
                      </div>
                  ) : (
                      <>
                      <i
                          className="far fa-circle-user hover-effect d-none d-md-inline fa-2x"
                          id="login"
                          onClick={handleIconClick} // Agregar el evento de clic al icono
                      ></i>
                      {/* Mostrar el menú desplegable si isMenuVisible es verdadero */}
                      {isMenuVisible && (
                          <select value={selectedOption} onChange={handleSelectChange}>
                          <option value="">Seleccione una opción</option>
                          <option value="logout">Salir</option>
                          <option value="opcion2">Opción 2</option>
                          </select>
                      )}
                      </>
                  )}
                  </div>
                </div>
               </div>
            </div>
                <div className="hamburgerMenu">
                    <i className="fa-solid fa-bars"></i>
                </div>
          </div>
    );
}

export default Header;
