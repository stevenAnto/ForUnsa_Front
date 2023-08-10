import React, { useState } from 'react';
import axios from 'axios'
import { Modal, Button, Form } from 'react-bootstrap';
import '../static/css/ModalComponent.css'; 
import { ruta } from "../api/jspost.js";

function ModalComponent({ show, onHide, title, onSubmit }) {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(ruta + 'login_user/', {
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('user_id', response.data.id)
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered backdropClassName="custom-backdrop" dialogClassName="custom-modal" animation={false} >
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <div>Email:</div>
              <Form.Control className='forminput'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='...@unsa.edu.pe'
              />
            </Form.Group> 
            <Form.Group controlId="password">
              <div>Contraseña:</div>
              <Form.Control className='forminput'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Contraseña'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="modal-footer-cancel" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" className="modal-footer-submit" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
          <br/>
        </Modal.Footer>        
          <div className="modalregister">
              <a href="/register">
                <Button variant="primary" className="modal-footer-register">
                  No tengo una cuenta
                </Button>
              </a>
          </div>
      </div>
    </Modal>
  );
}

export default ModalComponent;