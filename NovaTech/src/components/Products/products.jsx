import { Card } from "../Card/card"
import Tarjeta from '../../assets/img/inicio/Product/targetajpg.jpg'
import Ram from '../../assets/img/inicio/Product/RAM.jpg'

import Ssd from '../../assets/img/inicio/Product/SSD.jpg'
import './products.scss'
export function Products(){
    const imagesPrueba = [
        {
        id :1,
        imagen :Tarjeta,
        etiqueta:"Mas vendido",
        categoria:"Tarjeta Gráfica ",
        nombre:"GPU RTX 5080",
        precio:4899,
        onComprar:null
    },
    {
        id :2,
        imagen :Ram,
        etiqueta:"Nuevo",
        categoria:"Memoria Ram ",
        nombre:"RAM DDR5 32GB",
        precio:699,
        onComprar:null
    },
    {
        id :3,
        imagen :Ssd,
        etiqueta:"Oferta",
        categoria:"Almacenamiento ",
        nombre:"SSD NvMe 2TB",
        precio:929,
        onComprar:null
    }
    
    ];

    
    return (
        <section className="products">
            <div className="products__section__titulo">
                <h2>Productos <span>Destacados</span></h2>
                <div className="products__section__enlace">
                    <p>Lo más reciente en hardware de alto rendimiento .</p>
                    <a href="">
                        Ver Catálogo completo
                    </a>
                </div>
            </div>
            <div className="products__section">
                            {imagesPrueba.map((productos) =>(
                <Card
                    key={productos.id}
                    imagen={productos.imagen}
                    etiqueta={productos.etiqueta}
                    categoria={productos.categoria}
                    nombre={productos.nombre}
                    precio={productos.precio}
                ></Card>
            ))}
            </div>

        </section>
    )
}