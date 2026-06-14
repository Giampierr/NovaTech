function Features() {
  return (
    <section className="features">
      <div className="container">
        <header className="section-header center">
          <h2 className="section-title">
            Tecnología que <span className="highlight">transforma</span>
          </h2>
          <p className="section-subtitle">
            En NovaTech nos especializamos en componentes de alto rendimiento.
          </p>
        </header>

        <div className="features-grid">
          {/* Feature 1 */}
          <article className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Garantía Extendida</h3>
            <p>
              Todos nuestros productos cuentan con garantía de hasta 3 años
              respaldada por las mejores marcas.
            </p>
          </article>

          {/* Feature 2 */}
          <article className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3>Envío Rápido</h3>
            <p>
              Despacho en 24-48h a todo el país. Seguimiento en tiempo real de
              tu pedido.
            </p>
          </article>

          {/* Feature 3 */}
          <article className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"></path>
              </svg>
            </div>
            <h3>Compatibilidad Verificada</h3>
            <p>
              Te asesoramos para que cada componente sea 100% compatible con tu
              setup profesional.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Features;
