export function Mision(){
    return(
        <section className="mission-vision-section" id="mision-vision">
            <div className="container">
                <div className="mission-vision-shell">
                    <div className="mission-vision-copy">
                        <span className="section-tag">Nosotros</span>
                        <h2>La esencia que mueve a NovaTech</h2>
                        <p>
                            Creemos que la tecnologia debe ser cercana, util y confiable.
                            Por eso nuestra mision y vision guian cada recomendacion,
                            producto y experiencia que ofrecemos.
                        </p>

                        <div className="mission-vision-badges" aria-label="Valores de NovaTech">
                            <span>Calidad</span>
                            <span>Confianza</span>
                            <span>Innovacion</span>
                        </div>
                    </div>

                    <div className="mission-vision-grid">
                        <article className="mission-vision-card mission-card">
                            <div className="mission-vision-card-header">
                                <div className="mission-vision-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" role="img">
                                        <path d="M12 3v3" />
                                        <path d="M12 18v3" />
                                        <path d="M3 12h3" />
                                        <path d="M18 12h3" />
                                        <circle cx="12" cy="12" r="6" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                </div>
                                <span>Nuestro proposito</span>
                            </div>
                            <h3>Mision</h3>
                            <p>
                                Brindar productos tecnologicos de calidad, asesoramiento claro y
                                una atencion responsable, ayudando a nuestros clientes a elegir
                                componentes, equipos y accesorios que mejoren su experiencia
                                digital, academica, laboral y personal.
                            </p>
                        </article>

                        <article className="mission-vision-card vision-card">
                            <div className="mission-vision-card-header">
                                <div className="mission-vision-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" role="img">
                                        <path d="M4 19V5" />
                                        <path d="M4 5h10l1.5 3H20v8h-8.5L10 13H4" />
                                        <path d="M8 19h10" />
                                    </svg>
                                </div>
                                <span>Hacia donde vamos</span>
                            </div>
                            <h3>Vision</h3>
                            <p>
                                Ser una empresa reconocida por su confianza, innovacion y
                                compromiso con el cliente, posicionandonos como una alternativa
                                lider en soluciones tecnologicas y contribuyendo al desarrollo
                                digital de nuestra comunidad.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
