import React from 'react';
import './Footer.css'; // Importa el archivo CSS para estilos personalizados

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Sección de enlaces */}
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#products">Productos</a></li>
              <li><a href="#offers">Ofertas</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: info@pcgamingstore.com</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Dirección: Calle Falsa 123, Ciudad</p>
          </div>

          {/* Redes sociales */}
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="footer-bottom">
          <p>&copy; 2024 PC Gaming Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
