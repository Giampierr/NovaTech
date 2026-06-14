import videop from "../assets/img/inicio/videosection/VP.mp4";

function VideoSection() {
  return (
    <section className="about-video">
      <div className="container">
        {/* Encabezado */}
        <header className="section-header center">
          <h2 className="section-title">
            Conoce <span className="highlight">NovaTech</span>
          </h2>
          <p className="section-subtitle">
            Descubre quiénes somos y por qué somos tu mejor opción en hardware.
          </p>
        </header>

        {/* Video */}
        <div className="video-wrapper">
          <video className="video-element" controls>
            <source src={videop} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
