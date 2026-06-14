import objPrin from '../assets/img/nosotros/objetivo-prin/objectives-goals.png';
import objEsp1 from '../assets/img/nosotros/objetivo-esp/confianza-icon.png';
import objEsp2 from '../assets/img/nosotros/objetivo-esp/markets-pin.png';
import objEsp3 from '../assets/img/nosotros/objetivo-esp/rocket-star.png';

import "./ObjPrin.scss"

export function ObjPrin(){
  return(
    <section className="objprin">
      <div className="container">
        <header className="section-header ">
          <h2 className="section-title">
            El Proposito que <span className="highlight">Nos Impulsa</span>
          </h2>

          <p className="section-subtitle">
            En NovaTech elevamos el estandar en la compra de componentes de alto rendimiento.
          </p>
        </header>

        <div className="objprin-grid">
          <article className="objprin-pres">
            <div className="objprin-text-pres">
              <h3 className="section-title-prin">Nuestro Objetivo Principal</h3>
              <p className="section-subtitle-prin">
                Posicionar a NovaTech como la tienda lider en componentes de alto rendimiento,
                ofreciendo tecnologia actual y asesoria clara para mejorar el rendimiento de cada equipo.
              </p>
            </div>

            <figure className="objprin-image-pres">
              <img src={objPrin} alt="Objetivo Principal" />
            </figure>
          </article>
        </div>

        <div className="objesp-grid">
          <article className="objesp-card">
            <figure className="objesp-image-box">
              <img src={objEsp1} alt="Objetivo Especifico Confianza" />
            </figure>
            <h3 className="section-title-esp">Confianza</h3>
            <p className="section-subtitle-esp">
              Asegurar que todos los componentes funcionen correctamente en cada armado mediante controles de calidad.
            </p>
          </article>

          <article className="objesp-card">
            <figure className="objesp-image-box">
              <img src={objEsp2} alt="Objetivo Especifico Expansion" />
            </figure>
            <h3 className="section-title-esp">Expansion</h3>
            <p className="section-subtitle-esp">
              Abrir 3 nuevas tiendas en puntos clave durante los proximos 2 anos para estar mas cerca de ti.
            </p>
          </article>

          <article className="objesp-card">
            <figure className="objesp-image-box">
              <img src={objEsp3} alt="Objetivo Especifico Vanguardia" className="icono-cohete" />
            </figure>
            <h3 className="section-title-esp">Vanguardia</h3>
            <p className="section-subtitle-esp">
              Mantener el catalogo al dia con los ultimos lanzamientos disponibles en el mercado tecnologico.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ObjPrin;
