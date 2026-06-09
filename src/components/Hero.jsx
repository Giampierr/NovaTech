import heroimg from "../assets/img/inicio/hero/hero-setup.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      {/* Fondo */}
      <div className="hero-bg-wrapper">
        <img src={heroimg} alt="Setup gamer" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Contenido */}
      <div className="container hero-content">
        <span className="hero-tag">Nuevos lanzamientos 2026</span>

        <h1 className="hero-title">
          Potencia tu <span className="highlight">experiencia</span> digital
        </h1>

        <p className="hero-subtitle">
          Componentes de computadora de última generación. <br />
          Rendimiento, calidad y los mejores precios del mercado.
        </p>

        {/* Botones */}
        <div className="hero-cta">
            <Link to="/productos" className="btn btn-primary">
            Ver Productos →
          </Link>
          <Link to="#" className="btn btn-outline">
            Conócenos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
