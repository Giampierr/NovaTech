import './MatrizRes.scss'

// ============================================================
//  EDITAR AQUÍ: columnas del equipo
// ============================================================
const integrantes = [
    { nombre: 'Angelo Melo',       rol: 'Coordinador'       },
    { nombre: 'Manuel Huarac',     rol: 'Gestor de Equipo'  },
    { nombre: 'Abel Mucha',        rol: 'Desarrollador'     },
    { nombre: 'Felix Llacctahuaman', rol: 'Desarrollador'   },
    { nombre: 'Fernando Quispe',   rol: 'Desarrollador'     },
    { nombre: 'Jhassir León',      rol: 'Desarrollador'     },
]

// ============================================================
//  EDITAR AQUÍ: filas de actividades
//  Valores por celda: 'R' | 'A' | 'C' | 'I'
//  El orden de celdas sigue el orden de integrantes de arriba.
//  [ Angelo, Manuel, Abel, Felix, Fernando, Jhassir ]
// ============================================================
const actividades = [
    {
        fase: 'Planificación',
        nombre: 'Planificación del proyecto y gestión del backlog',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    {
        fase: 'Planificación',
        nombre: 'Coordinación del equipo y seguimiento de avances',
        celdas: ['C', 'A', 'R', 'R', 'R', 'R'],
    },
    {
        fase: 'Diseño',
        nombre: 'Diseño de interfaz y estilos visuales del sitio',
        celdas: ['A', 'C', 'C', 'C', 'C', 'R'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Mapa Organizacional del equipo',
        celdas: ['R', 'C', 'I', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Sección Misión y Visión',
        celdas: ['C', 'R', 'I', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Objetivos Principales y Objetivos Especiales',
        celdas: ['C', 'C', 'I', 'R', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Slider de CVs del equipo',
        celdas: ['I', 'C', 'I', 'I', 'R', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Matriz de Responsabilidad',
        celdas: ['C', 'C', 'R', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Catálogo de productos y página de detalle',
        celdas: ['A', 'I', 'C', 'C', 'C', 'R'],
    },
    {
        fase: 'Pruebas',
        nombre: 'Revisión funcional y control de calidad',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    {
        fase: 'Entrega',
        nombre: 'Presentación y entrega final del proyecto',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
]

// ============================================================
//  Leyenda RACI — no es necesario editar esto
// ============================================================
const leyenda = [
    { letra: 'R', titulo: 'Responsable',  desc: 'Ejecuta la tarea'           },
    { letra: 'A', titulo: 'Aprobador',    desc: 'Aprueba y responde por el resultado' },
    { letra: 'C', titulo: 'Consultado',   desc: 'Da su opinión antes de decidir'      },
    { letra: 'I', titulo: 'Informado',    desc: 'Se mantiene al tanto del avance'     },
]

export function MatrizRes() {
    return (
        <section className="matriz-section">
            <h2>Matriz de Responsabilidad</h2>
            <p className="matriz-subtitulo">Distribución de roles RACI — Proyecto NovaTech</p>

            {/* Leyenda */}
            <div className="matriz-leyenda">
                {leyenda.map(({ letra, titulo, desc }) => (
                    <div key={letra} className="leyenda-item">
                        <span className={`leyenda-badge badge-${letra}`}>{letra}</span>
                        <div>
                            <strong>{titulo}</strong>
                            <span> — {desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabla */}
            <div className="matriz-wrapper">
                <table className="matriz-table">
                    <thead>
                        <tr>
                            <th className="col-actividad-head">Actividad</th>
                            {integrantes.map((p, i) => (
                                <th key={i}>
                                    <span className="head-rol">{p.rol}</span>
                                    <span className="head-nombre">{p.nombre}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {actividades.map((act, i) => (
                            <tr key={i}>
                                <td className="col-actividad">
                                    <span className="act-nombre">{act.nombre}</span>
                                    <span className="act-fase">{act.fase}</span>
                                </td>
                                {act.celdas.map((valor, j) => (
                                    <td key={j} className="col-celda">
                                        <span className={`badge badge-${valor}`}>{valor}</span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
