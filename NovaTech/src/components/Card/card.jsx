import Image from '../../assets/img/inicio/Product/targetajpg.jpg'
import './card.scss'


export function Card({
        imagen,
        etiqueta,
        categoria,
        nombre,
        precio,
        onComprar,
    }){
    return(
        <div className="card">
        <div className="card__image">
            <p>{etiqueta}</p>
            <img src={imagen} alt={nombre} />
        </div>
            <div className="card__descripcion">
                <h3>{categoria}</h3>
                <p>{nombre}</p>
                <div className="card__descripcion__precio">
                    <p className='price'>S/<span>{precio}</span></p>
                    <button onClick={onComprar}>Comprar</button>
                </div>
            </div>
        </div>
    )
}