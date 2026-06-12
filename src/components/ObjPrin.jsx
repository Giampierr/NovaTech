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
            El Propósito que <span className="highlight">Nos Impulsa</span>
          </h2>

          <p className="section-subtitle">
            En NovaTech elevamos el estándar en la compra de componentes de alto rendimiento.
          </p>
        </header>

         {/* Objetivo principal */}
        <div className="objprin-grid">
          <article className="objprin-pres">
            
            <div className="objprin-text-pres">
              <h3 className="section-title-prin" >
                Nuestro Objetivo Principal</h3>
              <p className="section-subtitle-prin">
                Posicionar a NovaTech como la tienda líder en componentes de alto rendimiento, 
                ofreciendo tecnología actual y asesoría clara para mejorar el rendimiento de cada equipo.
              </p>
            </div>

            <figure className="objprin-image-pres">
              <img src={objPrin} alt="Objetivo Principal" />
            </figure>
            
          </article>
        </div>
        
        <div className="objesp-grid">
          {/* Objetivo específico 1 */}
          <article className="objesp-card">
            <figure className="objesp-image-box">
              <img  src={objEsp1} alt="Objetivo Específico Confianza" />
            </figure>
            <h3 className="section-title-esp">Confianza</h3>
            <p className="section-subtitle-esp">
              Asegurar que todos los componentes funcionen correctamente en cada armado mediante controles de calidad.
            </p>
          </article>

          {/* Objetivo específico 2 */}
          <article className="objesp-card">
            <figure className="objesp-image-box">
              <img src={objEsp2} alt="Objetivo Específico Expansión" />
            </figure>
            <h3 className="section-title-esp">Expansión</h3>
            <p className="section-subtitle-esp">
            Abrir 3 nuevas tiendas en puntos clave durante los próximos 2 años para estar más cerca de ti.
            </p>
          </article>

          {/* Objetivo específico 3 */}
          <article className="objesp-card">
            <figure className="objesp-image-box">
              <img src={objEsp3} alt="Objetivo Específico Vanguardia" className="icono-cohete" />
            </figure>
            <h3 className="section-title-esp">Vanguardia</h3>
            <p className="section-subtitle-esp">
              Mantener el catálogo al día con los últimos lanzamientos disponibles en el mercado tecnológico.
            </p>
          </article>
        </div>
        
      </div>
    </section>

  );
}

export default ObjPrin;