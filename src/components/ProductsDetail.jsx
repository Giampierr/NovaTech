import { useNavigate } from "react-router-dom"
import { productos } from "../assets/datos.js"
import { Card } from "./Card.jsx"

import "./ProductsDetails.scss"

export function ProductDetail({
    img,
    nombre,
    tipo,
    precio,
    descripcion,
    stock,
    caracteristicas
}) {

    const navigate = useNavigate()

    const productosRelacionados = productos
        .filter((p) => p.nombre !== nombre)
        .filter((p) => p.tipo === tipo)
        .slice(0, 5)

    return (

        <section className="details__products">

            <div className="details__products__top">

                <div className="details__image">

                    <img
                        src={img}
                        alt={nombre}
                    />

                </div>

                <div className="Details__container">

                    <span className="details__category">
                        {tipo}
                    </span>

                    <h2>{nombre}</h2>

                    <p className="details__price">
                        S/ <span>{precio}</span>
                    </p>

                    <p className="details__description">
                        {descripcion}
                    </p>

                    <div className="details__stock">

                        <strong>Stock disponible:</strong>

                        <span>{stock} unidades</span>

                    </div>



                    <div className="details__features">

                        <h3>
                            Características
                        </h3>

                        <ul>

                            {caracteristicas.map((item, index) => (

                                <li key={index}>
                                    {item}
                                </li>

                            ))}

                        </ul>

                    </div>


                    <div className="action">

                        <input
                            type="number"
                            min={1}
                            max={stock}
                            defaultValue={1}
                            step={1}
                        />

                        <button>
                            Comprar
                        </button>

                    </div>

                </div>

            </div>

            {/* =========================
                RELACIONADOS
            ========================= */}

            <div className="details__products__bottom">

                <h2>
                    <center>                    Productos relacionados
</center>
                </h2>

                <div className="related-products">

                    {productosRelacionados.map((producto) => (

                        <Card
                            key={producto.id}
                            {...producto}
                            onClick={() =>
                                navigate(`/productos/${producto.id}`)
                            }
                        />

                    ))}

                </div>

            </div>

        </section>

    )

}