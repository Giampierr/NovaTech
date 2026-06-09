import logo from "../assets/img/inicio/Header/logosin.png";
import {Link } from "react-router-dom"
function Header() {
  return (
    <header className="main-header">
      <div className="container header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logotipo NovaTech" className="logo-img" />
          <a href="/" className="logo-link">
            <span className="logo-text">
              Nova<span className="highlight">Tech</span>
            </span>
          </a>
        </div>

        {/* Navegación */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="nav-link active">
                Productos
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Acciones */}
        <div className="header-actions">
          {/* Buscar */}
          <button className="action-btn">
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.34-4.34"></path>
            </svg>
          </button>

          {/* Cuenta */}
          <button className="action-btn">
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
