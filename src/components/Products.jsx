import gpu from "../assets/img/inicio/products/targetajpg.jpg";
import ram from "../assets/img/inicio/products/RAM.jpg";
import ssd from "../assets/img/inicio/products/SSD.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="section-header-flex">
          <h2 className="section-title">
            Productos <span className="highlight">Destacados</span>
          </h2>
          <Link to="/productos" className="view-all">
            Ver catálogo completo →
          </Link>
        </div>

        {/* Grid de productos */}
        <div className="product-grid">
          {/* Producto 1 */}
          <article className="product-card">
            <div className="product-badge top-left">Más Vendido</div>

            <figure className="product-image-box">
              <img src={gpu} alt="Tarjeta Gráfica RTX 5080" />
            </figure>

            <div className="product-details">
              <span className="category">Tarjeta Gráfica</span>
              <h3>GPU RTX 5080</h3>

              <div className="product-footer">
                <p className="price">S/ 4,899</p>
                <button className="btn-buy-icon">Comprar</button>
              </div>
            </div>
          </article>

          {/* Producto 2 */}
          <article className="product-card">
            <div className="product-badge top-left new">Nuevo</div>

            <figure className="product-image-box">
              <img src={ram} alt="Memoria RAM DDR5 32GB" />
            </figure>

            <div className="product-details">
              <span className="category">Memoria RAM</span>
              <h3>RAM DDR5 32GB</h3>

              <div className="product-footer">
                <p className="price">S/ 699</p>
                <button className="btn-buy-icon">Comprar</button>
              </div>
            </div>
          </article>

          {/* Producto 3 */}
          <article className="product-card">
            <div className="product-badge top-left sale">Oferta</div>

            <figure className="product-image-box">
              <img src={ssd} alt="SSD NVMe 2TB" />
            </figure>

            <div className="product-details">
              <span className="category">Almacenamiento</span>
              <h3>SSD NVMe 2TB</h3>

              <div className="product-footer">
                <p className="price">S/ 929</p>
                <button className="btn-buy-icon">Comprar</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Products;
