import {BsFacebook,BsLinkedin,BsX,BsYoutube,BsEnvelope,BsTelephone,BsGeoAlt} from "react-icons/bs"
import Logo from '../../assets/img/inicio/header/logosin.png'
import './footer.scss'

export function Footer(){

    const year = new Date().getFullYear();

    return(
        <footer>
            <div className="footer__container">
                <div className="footer__section">
                    <div className="footer__section__logo">
                        <img src={Logo} alt="" />
                        <h3>Nova<span>Tech</span></h3>
                    </div>
                    <p>Tu destino para componentes de computadora de alto rendimiento .Calidad, garantía y los mejores precios .</p>
                    <div className="footer__section__redes">
                        <BsFacebook className="icon__redes"></BsFacebook>
                        <BsLinkedin className="icon__redes"></BsLinkedin>
                        <BsX className="icon__redes"></BsX>
                        <BsYoutube className="icon__redes"></BsYoutube>
                    </div>
                </div>
                <div className="footer__section">
                    <h3>ENLACES RÁPIDOS</h3>
                    <a href="">Inicio</a>
                    <a href="">Productos</a>
                    <a href="">Nosotros</a>
                    <a href="">Ofertas</a>
                    <a href="">Soporte</a>
                </div>
                <div className="footer__section">
                    <h3>CONTACTO</h3>
                    <div className="footer__section__contacto">
                        <BsEnvelope className="icon__contacto"></BsEnvelope>
                        <p>info@novatech.com</p>
                    </div>
                    <div className="footer__section__contacto">
                        <BsTelephone className="icon__contacto"></BsTelephone>
                        <p>+51(01) 123-4567</p>
                    </div>
                    <div className="footer__section__contacto">
                        <BsGeoAlt className="icon__contacto"></BsGeoAlt>
                        <p>Av. Tencología 1024, Lima</p>
                    </div>
                </div>
                <div className="footer__section">
                    <h3>NEWSLETTER</h3>
                    <p>Recibe las mejores ofertas y novedades en tu correo</p>
                    <div className="footer__section_suscribete">
                        <input type="email" placeholder="tu@email.com" />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom_section">
                    <p>&copy; {year} NovaTech. Todos los derechos reservados.</p>
                </div>
                <div className="footer__bottom_section">
                    <a href="">Politica de Privacidad</a>
                    <a href="">Términos y Condiciones</a>
                </div>
            </div>
        </footer>
    )
}