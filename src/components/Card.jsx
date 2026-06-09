import './Card.scss'

export function Card ({
    id,
    nombre,
    tipo,
    precio,
    img,
    badge,
    codigo,  
    marca,   
    pais,
    onClick    
}){
    return (
        <article className="product-card" onClick={onClick}>
            {/* MUESTRA LA ETIQUETA COLOCADA EN EL .JS */}
            {badge && <div className="product-badge top-left">{badge}</div>}
            
            <figure className="product-image-box">
                <img src={img} alt={nombre} />
            </figure>
            
            <div className="product-details">
                {/* MUESTRA TIPO Y MARCA */}
                <span className="category">{tipo} | {marca}</span>
                
                <h3>{nombre}</h3>
                
                {/* MUESTRA CODIGO Y PAIS */}
                <div className="product-info-extra">
                    <p className="product-code">Ref: {codigo}</p>
                    <p className="product-origin">Origen: {pais}</p>
                </div>
                
                <div className="product-footer">
                    <p className="price">S/ {precio}</p>
                    <button className="btn-buy-icon">Comprar</button>
                </div>
            </div>
        </article>
    )
}