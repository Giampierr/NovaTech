import { useParams } from "react-router-dom"
import { productos } from "../assets/datos"
import { ProductDetail } from "../components/ProductsDetail"

export function ProductDetailPage() {

    const { id } = useParams()

    const producto = productos.find(
        (p) => p.id === Number(id)
    )

    return (

        <main>

            <ProductDetail
                {...producto}
            />

        </main>

    )
}