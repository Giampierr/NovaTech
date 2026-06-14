import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ScrollToTop } from "./ScrollToTop.jsx"
import { productos } from "../assets/datos.js"
import { Card } from "./Card"

import "./ListProducts.scss"

export function ListProducts() {

    const navigate = useNavigate()

    const [paginaActual, setPaginaActual] = useState(1)

    const [busqueda, setBusqueda] = useState("")

    const [categoriaSel, setCategoriaSel] = useState("Todos")

    const [orden, setOrden] = useState("menor")

   
    const productosPorPagina = 8

 
    const productosFiltrados = productos.filter((producto) => {

        const coincideBusqueda =
            producto.nombre
                .toLowerCase()
                .includes(busqueda.toLowerCase())

        const coincideCategoria =
            categoriaSel === "Todos" ||
            producto.tipo === categoriaSel

        return coincideBusqueda && coincideCategoria

    })

    // ORDENAMIENTO

    const productosOrdenados = [...productosFiltrados].sort((a, b) => {

        if (orden === "menor") {
            return a.precio - b.precio
        }

        return b.precio - a.precio

    })

    // PAGINACIÓN

    const totalPaginas = Math.ceil(
        productosOrdenados.length / productosPorPagina
    )

    const ultimoProducto =
        paginaActual * productosPorPagina

    const primerProducto =
        ultimoProducto - productosPorPagina

    const productosVisibles =
        productosOrdenados.slice(
            primerProducto,
            ultimoProducto
        )



    useEffect(() => {

        if (paginaActual > totalPaginas) {
            setPaginaActual(1)
        }

    }, [totalPaginas, paginaActual])

 

    function handleBuscar(e) {

        setBusqueda(e.target.value)

        setPaginaActual(1)

    }

    function handleCategoria(e) {

        setCategoriaSel(e.target.value)

        setPaginaActual(1)

    }

    function handleOrden(e) {

        setOrden(e.target.value)

        setPaginaActual(1)

    }

    function handleDetalleProducto(id) {

        navigate(`/productos/${id}`)

        window.scrollTo(0, 0)

    }

    function paginaAnterior() {
        setPaginaActual((prev) => prev - 1)
        window.scrollTo(0,0)
    }

    function paginaSiguiente() {
        setPaginaActual((prev) => prev + 1)
        window.scrollTo(0,0)
    }

    return (

        <section className="ListProducts">

            {/* =========================
                FILTROS
            ========================= */}

            <div className="filters-bar">

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    className="search-input"
                    onChange={handleBuscar}
                />

                <select
                    className="category-select"
                    onChange={handleCategoria}
                >

                    <option value="Todos">
                        Todas las Categorías
                    </option>

                    <option value="Procesador">
                        Procesadores
                    </option>

                    <option value="Tarjeta Gráfica">
                        Tarjetas Gráficas
                    </option>

                    <option value="Monitor">
                        Monitores
                    </option>

                    <option value="Teclado">
                        Teclados
                    </option>

                    <option value="Mouse">
                        Mouse
                    </option>

                    <option value="SSD">
                        SSD
                    </option>

                    <option value="Memoria RAM">
                        Memoria RAM
                    </option>

                    <option value="Fuente de Poder">
                        Fuente de Poder
                    </option>

                    <option value="Audio">
                        Audio
                    </option>

                    <option value="Gabinete">
                        Gabinete
                    </option>

                </select>

                <select
                    className="category-select"
                    onChange={handleOrden}
                >

                    <option value="menor">
                        Menor precio
                    </option>

                    <option value="mayor">
                        Mayor precio
                    </option>

                </select>

            </div>


            <div className="ListProducts__grid">

                {productosVisibles.map((producto) => (

                    <Card
                        key={producto.id}
                        {...producto}
                        onClick={() =>
                            handleDetalleProducto(producto.id)
                        }
                    />

                ))}

            </div>

 

            {totalPaginas > 1 && (

                <div className="pagination">

                    <button
                        disabled={paginaActual === 1}
                        onClick={paginaAnterior}
                    >
                        Anterior
                    </button>

                    <span>

                        Página {paginaActual} de {totalPaginas}

                    </span>

                    <button
                        disabled={paginaActual === totalPaginas}
                        onClick={paginaSiguiente}
                    >
                        Siguiente
                    </button>

                </div>

            )}

        </section>

    )

}