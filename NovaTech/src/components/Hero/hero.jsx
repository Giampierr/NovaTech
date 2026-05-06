import HeroImg from '../../assets/img/inicio/hero/hero-setup.jpg';
import './hero.scss';

export function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={HeroImg} alt="Setup gamer" />

      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h3>NUEVOS LANZAMIENTOS 2026</h3>

        <h2>
          Potencia tu <span>experiencia</span> digital
        </h2>

        <p>
          Componentes de computadora de última generación.
          Rendimiento, calidad y los mejores precios del mercado.
        </p>

        <div className="hero__buttons">
          <button>Ver Productos</button>
          <button className="btn__outline">Conócenos</button>
        </div>
      </div>
    </section>
  );
}