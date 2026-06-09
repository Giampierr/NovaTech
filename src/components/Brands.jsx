function Brands() {
  return (
    <section className="brands">
      <div className="container">
        {/* Encabezado */}
        <header className="section-header center">
          <h2 className="section-title">
            Marcas <span className="highlight">Aliadas</span>
          </h2>
          <p className="section-subtitle">
            Trabajamos con las mejores marcas del mundo tecnológico.
          </p>
        </header>

        {/* Lista de marcas */}
        <ul className="brands-list">
          <li className="brand-item">
            <a href="https://www.gigabyte.com" target="_blank" rel="noreferrer">Gigabyte</a>
          </li>
          <li className="brand-item">
            <a href="https://www.kingston.com" target="_blank" rel="noreferrer">Kingston</a>
          </li>
          <li className="brand-item">
            <a href="https://www.logitech.com" target="_blank" rel="noreferrer">Logitech</a>
          </li>
          <li className="brand-item">
            <a href="https://www.razer.com" target="_blank" rel="noreferrer">Razer</a>
          </li>
          <li className="brand-item">
            <a href="https://www.nvidia.com" target="_blank" rel="noreferrer">NVIDIA</a>
          </li>
          <li className="brand-item">
            <a href="https://www.amd.com" target="_blank" rel="noreferrer">AMD</a>
          </li>
          <li className="brand-item">
            <a href="https://www.intel.com" target="_blank" rel="noreferrer">Intel</a>
          </li>
          <li className="brand-item">
            <a href="https://www.corsair.com" target="_blank" rel="noreferrer">Corsair</a>
          </li>
          <li className="brand-item">
            <a href="https://www.asus.com" target="_blank" rel="noreferrer">ASUS</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Brands;
