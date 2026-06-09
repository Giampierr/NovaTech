const imagenes = import.meta.glob(
  './img/PageProducts/*',
  { eager: true }
)

function obtenerImagen(nombreArchivo) {

  const ruta = `./img/PageProducts/${nombreArchivo}`

  return imagenes[ruta]?.default

}

export const productos = [
{
  id: 1,
  nombre: "AMD Ryzen 3",
  tipo: "Procesador",
  precio: 399,
  img: obtenerImagen("AmdRyzen3.webp"),
  badge: "Oferta",
  codigo: "CPU-AMD-001",
  marca: "AMD",
  pais: "EE.UU.",
  descripcion:
    "Procesador de entrada ideal para tareas básicas, estudio y gaming ligero. Ofrece un excelente equilibrio entre rendimiento y consumo energético para computadoras domésticas.",
  caracteristicas: [
    "4 núcleos y 8 hilos",
    "Frecuencia turbo hasta 4.0 GHz",
    "Socket AM4",
    "Bajo consumo energético",
    "Ideal para gaming básico"
  ],
  stock: 12
},
{
  id: 2,
  nombre: "AMD Ryzen 5",
  tipo: "Procesador",
  precio: 699,
  img: obtenerImagen("AmdRyzen5.jpg"),
  badge: "Más vendido",
  codigo: "CPU-AMD-002",
  marca: "AMD",
  pais: "EE.UU.",
  descripcion:
    "Procesador muy equilibrado para gaming, multitarea y productividad. Excelente opción para usuarios que buscan rendimiento moderno a buen precio.",
  caracteristicas: [
    "6 núcleos y 12 hilos",
    "Excelente para multitarea",
    "Compatible con PCIe 4.0",
    "Ideal para gaming en 1080p",
    "Socket AM4"
  ],
  stock: 10
},
{
  id: 3,
  nombre: "AMD Ryzen 7",
  tipo: "Procesador",
  precio: 1199,
  img: obtenerImagen("AmdRyzen7.png"),
  badge: "Nuevo",
  codigo: "CPU-AMD-003",
  marca: "AMD",
  pais: "EE.UU.",
  descripcion:
    "Procesador potente diseñado para gaming avanzado, streaming y edición de contenido. Ofrece gran rendimiento en aplicaciones exigentes.",
  caracteristicas: [
    "8 núcleos y 16 hilos",
    "Ideal para streaming",
    "Gran rendimiento multitarea",
    "Arquitectura moderna AMD",
    "Excelente para edición"
  ],
  stock: 6
},
{
  id: 4,
  nombre: "AMD Ryzen 9",
  tipo: "Procesador",
  precio: 1999,
  img: obtenerImagen("AmdRyzen9.jpg"),
  badge: "Más vendido",
  codigo: "CPU-AMD-004",
  marca: "AMD",
  pais: "EE.UU.",
  descripcion:
    "Procesador de gama alta enfocado en gaming extremo, renderizado y trabajos profesionales intensivos con máximo rendimiento.",
  caracteristicas: [
    "12 núcleos y 24 hilos",
    "Rendimiento profesional",
    "Ideal para renderizado",
    "Compatible con PCIe 4.0",
    "Excelente refrigeración recomendada"
  ],
  stock: 4
},
{
  id: 5,
  nombre: "ASUS RTX 4060",
  tipo: "Tarjeta Gráfica",
  precio: 1899,
  img: obtenerImagen("AsusRTX4060.webp"),
  badge: "Oferta",
  codigo: "GPU-ASU-005",
  marca: "ASUS",
  pais: "Taiwán",
  descripcion:
    "Tarjeta gráfica moderna ideal para gaming competitivo y títulos AAA en 1080p y 1440p con gran eficiencia energética.",
  caracteristicas: [
    "8GB GDDR6",
    "Ray Tracing",
    "DLSS 3",
    "Ideal para 1080p",
    "Excelente eficiencia energética"
  ],
  stock: 8
},
{
  id: 6,
  nombre: "ASUS RTX 4080",
  tipo: "Tarjeta Gráfica",
  precio: 4599,
  img: obtenerImagen("AsusRTX4080.webp"),
  badge: "Nuevo",
  codigo: "GPU-ASU-006",
  marca: "ASUS",
  pais: "Taiwán",
  descripcion:
    "GPU de gama alta diseñada para gaming en 4K, renderizado y creación profesional con tecnologías gráficas avanzadas.",
  caracteristicas: [
    "16GB GDDR6X",
    "Gaming 4K",
    "Ray Tracing avanzado",
    "DLSS 3",
    "Ideal para creadores"
  ],
  stock: 3
},
{
  id: 7,
  nombre: "ASUS RTX 5060",
  tipo: "Tarjeta Gráfica",
  precio: 2499,
  img: obtenerImagen("AsusRTX5060.png"),
  badge: "Más vendido",
  codigo: "GPU-ASU-007",
  marca: "ASUS",
  pais: "Taiwán",
  descripcion:
    "Tarjeta gráfica moderna con excelente rendimiento para gaming competitivo y tareas gráficas exigentes.",
  caracteristicas: [
    "Arquitectura moderna",
    "Gaming fluido",
    "Excelente refrigeración",
    "Compatible con DLSS",
    "Bajo consumo energético"
  ],
  stock: 7
},
{
  id: 8,
  nombre: "Intel Core i3",
  tipo: "Procesador",
  precio: 499,
  img: obtenerImagen("Corei3.jpg"),
  badge: "Oferta",
  codigo: "CPU-INT-008",
  marca: "Intel",
  pais: "EE.UU.",
  descripcion:
    "Procesador ideal para tareas cotidianas, navegación web y estudio. Buena opción para computadoras de oficina.",
  caracteristicas: [
    "4 núcleos",
    "Excelente para oficina",
    "Bajo consumo",
    "Compatibilidad amplia",
    "Buen rendimiento diario"
  ],
  stock: 15
},
{
  id: 9,
  nombre: "Intel Core i5 10600KF",
  tipo: "Procesador",
  precio: 899,
  img: obtenerImagen("Corei510600kf.png"),
  badge: "Más vendido",
  codigo: "CPU-INT-009",
  marca: "Intel",
  pais: "EE.UU.",
  descripcion:
    "Procesador muy popular para gaming y multitarea gracias a su gran rendimiento y estabilidad.",
  caracteristicas: [
    "6 núcleos y 12 hilos",
    "Excelente para gaming",
    "Frecuencias altas",
    "Compatible con overclock",
    "Ideal para multitarea"
  ],
  stock: 9
},
{
  id: 10,
  nombre: "Intel Core i7 10700",
  tipo: "Procesador",
  precio: 1399,
  img: obtenerImagen("CoreI710700.jpg"),
  badge: "Nuevo",
  codigo: "CPU-INT-010",
  marca: "Intel",
  pais: "EE.UU.",
  descripcion:
    "Procesador potente para gaming, edición y productividad profesional con gran capacidad multitarea.",
  caracteristicas: [
    "8 núcleos y 16 hilos",
    "Excelente para edición",
    "Ideal para gaming",
    "Gran estabilidad",
    "Alto rendimiento multitarea"
  ],
  stock: 5
},
{
  id: 11,
  nombre: "Intel Core i9 14900K",
  tipo: "Procesador",
  precio: 2899,
  img: obtenerImagen("Corei914900k.webp"),
  badge: "Más vendido",
  codigo: "CPU-INT-011",
  marca: "Intel",
  pais: "EE.UU.",
  descripcion:
    "Procesador premium diseñado para usuarios extremos, gaming competitivo y cargas profesionales intensivas.",
  caracteristicas: [
    "24 núcleos híbridos",
    "Frecuencia extrema",
    "Ideal para 4K",
    "Excelente multitarea",
    "Compatible con DDR5"
  ],
  stock: 3
},

{
  id: 12,
  nombre: "EVGA RTX 3070 Ti",
  tipo: "Tarjeta Gráfica",
  precio: 3299,
  img: obtenerImagen("Evga RTX 3070ti.webp"),
  badge: "Oferta",
  codigo: "GPU-EVG-012",
  marca: "EVGA",
  pais: "EE.UU.",
  descripcion:
    "Potente tarjeta gráfica ideal para gaming en 1440p y 4K. Ofrece excelente rendimiento en juegos modernos, soporte para Ray Tracing y gran estabilidad térmica incluso bajo cargas intensivas.",
  stock: 4,
  caracteristicas: [
    "8GB GDDR6X",
    "Ray Tracing",
    "DLSS",
    "Triple ventilador",
    "Gaming 1440p/4K"
  ]
},

{
  id: 13,
  nombre: "Gigabyte RTX 2060",
  tipo: "Tarjeta Gráfica",
  precio: 1499,
  img: obtenerImagen("Gigabyte RTX 206.png"),
  badge: "Oferta",
  codigo: "GPU-GIG-013",
  marca: "Gigabyte",
  pais: "Taiwán",
  descripcion:
    "Tarjeta gráfica económica con excelente rendimiento para juegos competitivos y títulos AAA en 1080p. Ideal para usuarios que buscan una GPU equilibrada y moderna.",
  stock: 10,
  caracteristicas: [
    "6GB GDDR6",
    "Ray Tracing",
    "DLSS",
    "Doble ventilador",
    "Gaming 1080p"
  ]
},

{
  id: 14,
  nombre: "Gigabyte RTX 3060",
  tipo: "Tarjeta Gráfica",
  precio: 2199,
  img: obtenerImagen("Gigabyte RTX 3060.jpg"),
  badge: "Más vendido",
  codigo: "GPU-GIG-014",
  marca: "Gigabyte",
  pais: "Taiwán",
  descripcion:
    "GPU moderna con excelente relación calidad-precio. Permite disfrutar juegos actuales con gráficos altos y un rendimiento fluido en 1080p y 1440p.",
  stock: 6,
  caracteristicas: [
    "12GB GDDR6",
    "Ray Tracing",
    "DLSS",
    "Windforce Cooling",
    "Gaming 1440p"
  ]
},

{
  id: 15,
  nombre: "Kingston SSD 1TB",
  tipo: "SSD",
  precio: 349,
  img: obtenerImagen("MemoriaSSDKingston1TB.webp"),
  badge: "Nuevo",
  codigo: "SSD-KIN-015",
  marca: "Kingston",
  pais: "EE.UU.",
  descripcion:
    "Unidad SSD rápida y confiable diseñada para mejorar significativamente la velocidad del sistema, tiempos de carga y transferencia de archivos.",
  stock: 20,
  caracteristicas: [
    "1TB almacenamiento",
    "SSD SATA",
    "Lectura rápida",
    "Bajo consumo",
    "Alta durabilidad"
  ]
},

{
  id: 16,
  nombre: "Monitor ASUS",
  tipo: "Monitor",
  precio: 1199,
  img: obtenerImagen("MonitorAsus.webp"),
  badge: "Oferta",
  codigo: "MON-ASU-016",
  marca: "ASUS",
  pais: "Taiwán",
  descripcion:
    "Monitor ideal para gaming y productividad diaria. Cuenta con excelente calidad de imagen, diseño moderno y buena tasa de refresco para experiencias fluidas.",
  stock: 6,
  caracteristicas: [
    "24 pulgadas",
    "144Hz",
    "Panel IPS",
    "1ms de respuesta",
    "FreeSync"
  ]
},

{
  id: 17,
  nombre: "Monitor Samsung 27",
  tipo: "Monitor",
  precio: 1499,
  img: obtenerImagen("MonitorLedSamsung27.jpg"),
  badge: "Más vendido",
  codigo: "MON-SAM-017",
  marca: "Samsung",
  pais: "Corea del Sur",
  descripcion:
    "Pantalla de 27 pulgadas ideal para multitarea, entretenimiento y gaming. Ofrece colores vivos, excelente nitidez y una experiencia visual inmersiva.",
  stock: 8,
  caracteristicas: [
    "27 pulgadas",
    "Full HD",
    "Panel IPS",
    "75Hz",
    "Diseño delgado"
  ]
},

{
  id: 18,
  nombre: "Monitor Samsung Curvo",
  tipo: "Monitor",
  precio: 1699,
  img: obtenerImagen("MonitorSamsungCurvo.png"),
  badge: "Nuevo",
  codigo: "MON-SAM-018",
  marca: "Samsung",
  pais: "Corea del Sur",
  descripcion:
    "Monitor curvo diseñado para ofrecer una experiencia más inmersiva en juegos, películas y productividad. Su diseño moderno mejora la comodidad visual.",
  stock: 5,
  caracteristicas: [
    "27 pulgadas",
    "Pantalla curva",
    "144Hz",
    "AMD FreeSync",
    "Panel VA"
  ]
},

{
  id: 19,
  nombre: "Mouse Razer",
  tipo: "Mouse",
  precio: 199,
  img: obtenerImagen("MouseRazer.webp"),
  badge: "Oferta",
  codigo: "MOU-RAZ-019",
  marca: "Razer",
  pais: "Singapur",
  descripcion:
    "Mouse gaming ligero y preciso pensado para jugadores competitivos. Ofrece excelente ergonomía y sensores de alta precisión para movimientos rápidos.",
  stock: 25,
  caracteristicas: [
    "Sensor óptico",
    "RGB Chroma",
    "Diseño ergonómico",
    "Alta precisión DPI",
    "Botones programables"
  ]
},

{
  id: 20,
  nombre: "Mouse Razer DeathAdder",
  tipo: "Mouse",
  precio: 299,
  img: obtenerImagen("MouseRazerDeathadder.webp"),
  badge: "Más vendido",
  codigo: "MOU-RAZ-020",
  marca: "Razer",
  pais: "Singapur",
  descripcion:
    "Uno de los mouse gaming más populares del mercado gracias a su precisión, comodidad y excelente respuesta en juegos competitivos y eSports.",
  stock: 18,
  caracteristicas: [
    "Sensor Focus+",
    "RGB Chroma",
    "Diseño ergonómico",
    "Switches ópticos",
    "20000 DPI"
  ]
},
{
  id: 21,
  nombre: "MSI RTX 5060",
  tipo: "Tarjeta Gráfica",
  precio: 2599,
  img: obtenerImagen("MsiRTX5060.webp"),
  badge: "Nuevo",
  codigo: "GPU-MSI-021",
  marca: "MSI",
  pais: "Taiwán",
  descripcion:
    "Tarjeta gráfica moderna diseñada para gaming competitivo y experiencias fluidas en resoluciones altas. Ofrece excelente refrigeración, soporte para tecnologías actuales y un rendimiento estable incluso en sesiones intensivas.",
  stock: 6,
  caracteristicas: [
    "8GB GDDR6",
    "Ray Tracing",
    "DLSS",
    "Triple ventilador",
    "PCI Express 4.0"
  ]
},

{
  id: 22,
  nombre: "Teclado Logitech",
  tipo: "Teclado",
  precio: 249,
  img: obtenerImagen("TecladoLogitech.webp"),
  badge: "Oferta",
  codigo: "TEC-LOG-022",
  marca: "Logitech",
  pais: "Suiza",
  descripcion:
    "Teclado cómodo y silencioso ideal para oficina, estudio y uso diario. Cuenta con diseño ergonómico y teclas resistentes que brindan una experiencia agradable durante largas jornadas.",
  stock: 14,
  caracteristicas: [
    "Conexión USB",
    "Diseño ergonómico",
    "Teclas silenciosas",
    "Formato completo",
    "Alta durabilidad"
  ]
},

{
  id: 23,
  nombre: "Teclado Logitech Pro X",
  tipo: "Teclado",
  precio: 499,
  img: obtenerImagen("TecladoLogitechProXl.jpg"),
  badge: "Más vendido",
  codigo: "TEC-LOG-023",
  marca: "Logitech",
  pais: "Suiza",
  descripcion:
    "Teclado mecánico orientado a jugadores competitivos. Ofrece switches rápidos, iluminación RGB personalizable y una construcción premium pensada para alto rendimiento y durabilidad.",
  stock: 10,
  caracteristicas: [
    "Switches mecánicos",
    "RGB LIGHTSYNC",
    "Cable desmontable",
    "Anti-ghosting",
    "Formato TKL"
  ]
},

{
  id: 24,
  nombre: "Ventus RTX 2060",
  tipo: "Tarjeta Gráfica",
  precio: 1599,
  img: obtenerImagen("Ventus RTX 2060.jpg"),
  badge: "Oferta",
  codigo: "GPU-MSI-024",
  marca: "MSI",
  pais: "Taiwán",
  descripcion:
    "GPU confiable para gaming en 1080p con excelente relación calidad-precio. Ideal para jugadores que buscan rendimiento sólido y soporte para tecnologías modernas.",
  stock: 5,
  caracteristicas: [
    "6GB GDDR6",
    "Ray Tracing",
    "DLSS",
    "Doble ventilador",
    "Gaming 1080p"
  ]
},

{
  id: 25,
  nombre: "Memoria RAM Kingston 16GB",
  tipo: "Memoria RAM",
  precio: 280,
  img: obtenerImagen("KingstonRam.webp"),
  badge: "Nuevo",
  codigo: "RAM-KIN-025",
  marca: "Kingston",
  pais: "EE.UU.",
  descripcion:
    "Memoria RAM de alto rendimiento ideal para gaming, multitarea y productividad. Mejora la velocidad general del sistema y ofrece gran estabilidad bajo carga.",
  stock: 12,
  caracteristicas: [
    "16GB DDR4",
    "3200MHz",
    "Disipador térmico",
    "Bajo consumo",
    "Compatible XMP"
  ]
},

{
  id: 26,
  nombre: "Fuente Corsair CX-750M",
  tipo: "Fuente de Poder",
  precio: 450,
  img: obtenerImagen("FuentePoderCorsair.png"),
  badge: "Oferta",
  codigo: "POW-COR-026",
  marca: "Corsair",
  pais: "Taiwán",
  descripcion:
    "Fuente de alimentación eficiente y estable para equipos gaming y de alto rendimiento. Su diseño semimodular facilita el manejo de cables y mejora el flujo de aire.",
  stock: 7,
  caracteristicas: [
    "750W",
    "Certificación 80 Plus Bronze",
    "Semi modular",
    "Ventilador silencioso",
    "Protección eléctrica"
  ]
},

{
  id: 27,
  nombre: "Audífonos ASUS ROG",
  tipo: "Audio",
  precio: 680,
  img: obtenerImagen("AsusRogAudifonos.webp"),
  badge: "Nuevo",
  codigo: "AUD-ASU-027",
  marca: "ASUS",
  pais: "Taiwán",
  descripcion:
    "Audífonos gaming con sonido envolvente y gran comodidad para largas sesiones. Incluyen micrófono de alta calidad y compatibilidad con múltiples plataformas.",
  stock: 9,
  caracteristicas: [
    "Sonido 7.1",
    "Micrófono desmontable",
    "RGB Aura Sync",
    "Almohadillas cómodas",
    "Compatible PC y consola"
  ]
},

{
  id: 28,
  nombre: "Lian Li PC-O11 Razer",
  tipo: "Gabinete",
  precio: 950,
  img: obtenerImagen("RazerGabinete.jpg"),
  badge: "Más vendido",
  codigo: "CAS-RAZ-028",
  marca: "Razer",
  pais: "Singapur",
  descripcion:
    "Gabinete premium diseñado para setups RGB y alto rendimiento. Cuenta con excelente gestión de cables, flujo de aire optimizado y paneles de vidrio templado.",
  stock: 4,
  caracteristicas: [
    "Vidrio templado",
    "ARGB integrado",
    "Excelente airflow",
    "Gestión de cables",
    "Formato ATX"
  ]
},

{
  id: 29,
  nombre: "Razer BlackWidow V4",
  tipo: "Teclado",
  precio: 750,
  img: obtenerImagen("RazerTeclado.webp"),
  badge: "Nuevo",
  codigo: "TEC-RAZ-029",
  marca: "Razer",
  pais: "Singapur",
  descripcion:
    "Teclado mecánico profesional pensado para eSports y gaming competitivo. Ofrece switches rápidos, iluminación RGB avanzada y gran precisión en cada pulsación.",
  stock: 6,
  caracteristicas: [
    "Switches Green",
    "RGB Chroma",
    "Reposamuñecas",
    "Anti-ghosting",
    "Construcción premium"
  ]
},

{
  id: 30,
  nombre: "Monitor Gigabyte G27F",
  tipo: "Monitor",
  precio: 1100,
  img: obtenerImagen("MonitorGigabyte.png"),
  badge: "Oferta",
  codigo: "MON-GIG-030",
  marca: "Gigabyte",
  pais: "Taiwán",
  descripcion:
    "Monitor gaming de alto refresco ideal para juegos competitivos y experiencias fluidas. Ofrece colores vibrantes, baja latencia y excelente nitidez.",
  stock: 5,
  caracteristicas: [
    "27 pulgadas",
    "165Hz",
    "1ms de respuesta",
    "Panel IPS",
    "FreeSync Premium"
  ]
}
];

