import './MatrizRes.scss'

const integrantes = [
    { nombre: 'Angelo Melo',       rol: 'Coordinador'       },
    { nombre: 'Manuel Huarac',     rol: 'Gestor de Equipo'  },
    { nombre: 'Abel Mucha',        rol: 'Desarrollador'     },
    { nombre: 'Felix Llacctahuaman', rol: 'Desarrollador'   },
    { nombre: 'Fernando Quispe',   rol: 'Desarrollador'     },
    { nombre: 'Jhassir Leon',      rol: 'Desarrollador'     },
]

const actividades = [
    {
        fase: 'Planificacion',
        nombre: 'Planificacion del proyecto y gestion del backlog',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    {
        fase: 'Planificacion',
        nombre: 'Coordinacion del equipo y seguimiento de avances',
        celdas: ['C', 'A', 'R', 'R', 'R', 'R'],
    },
    {
        fase: 'Diseno',
        nombre: 'Diseno de interfaz y estilos visuales del sitio',
        celdas: ['A', 'C', 'C', 'C', 'C', 'R'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Mapa Organizacional del equipo',
        celdas: ['R', 'C', 'I', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Seccion Mision y Vision',
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
        nombre: 'Catalogo de productos y pagina de detalle',
        celdas: ['A', 'I', 'C', 'C', 'C', 'R'],
    },
    {
        fase: 'Pruebas',
        nombre: 'Revision funcional y control de calidad',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    {
        fase: 'Entrega',
        nombre: 'Presentacion y entrega final del proyecto',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
]

const leyenda = [
    { letra: 'R', titulo: 'Responsable',  desc: 'Ejecuta la tarea' },
    { letra: 'A', titulo: 'Aprobador',    desc: 'Aprueba y responde por el resultado' },
    { letra: 'C', titulo: 'Consultado',   desc: 'Da su opinion antes de decidir' },
    { letra: 'I', titulo: 'Informado',    desc: 'Se mantiene al tanto del avance' },
]

export function MatrizRes() {
    return (
        <section className="matriz-section">
            <h2>Matriz de Responsabilidad</h2>
            <p className="matriz-subtitulo">Distribucion de roles RACI - Proyecto NovaTech</p>

            <div className="matriz-leyenda">
                {leyenda.map(({ letra, titulo, desc }) => (
                    <div key={letra} className="leyenda-item">
                        <span className={`leyenda-badge badge-${letra}`}>{letra}</span>
                        <div>
                            <strong>{titulo}</strong>
                            <span> - {desc}</span>
                        </div>
                    </div>
                ))}
            </div>

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
