import Logo from '../../assets/img/inicio/header/logosin.png'
import {BsSearch,BsPerson,BsBag} from 'react-icons/bs'
import './header.scss'
export function Header(){
    return(
        <header>
            <div className="header__section">
                <img src={Logo} alt="" />
                <h1>Nova<span>Tech</span></h1>
            </div>
            <div className="header__section">
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Nosotros</a>
                <a href="">Contacto</a>
            </div>
            <div className="header__section">
                <BsSearch></BsSearch>
                <BsPerson></BsPerson>
                <BsBag></BsBag>
            </div>
        </header>
    )
}