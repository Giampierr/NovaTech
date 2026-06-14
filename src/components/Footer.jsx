import logo from "../assets/img/inicio/header/logosin.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Marca */}
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="Logo NovaTech" className="footer-logo-img" />
            <span className="logo-text">
              Nova<span className="highlight">Tech</span>
            </span>
          </div>

          <p>
            Tu destino para componentes de computadora de alto rendimiento.
            Calidad, garantía y los mejores precios.
          </p>

          <div className="social-links">
            <a href="https://www.facebook.com/" className="social-link" target="_blank" rel="noreferrer" aria-label="Facebook">
              F
            </a>
            <a href="https://www.linkedin.com/" className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://x.com/" className="social-link" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              X
            </a>
            <a href="https://www.youtube.com/" className="social-link" target="_blank" rel="noreferrer" aria-label="YouTube">
              YT
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="footer-nav">
          <h4 className="footer-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="#">Nosotros</Link></li>
            <li><Link to="#">Ofertas</Link></li>
            <li><Link to="#">Soporte</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-contact">
          <h4 className="footer-title">Contacto</h4>
          <ul className="contact-info">
            <li>
              <span className="contact-icon">📧</span>
              <a href="mailto:info@novatech.com">info@novatech.com</a>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <a href="tel:+51011234567">+51 (01) 123-4567</a>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Av. Tecnología 1024, Lima</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4 className="footer-title">Newsletter</h4>
          <p>Recibe las mejores ofertas y novedades en tu correo.</p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="tu@email.com"
              required
              className="footer-input"
            />
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="container footer-bottom">
        <p>&copy; 2026 NovaTech. Todos los derechos reservados.</p>

        <div className="legal-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
