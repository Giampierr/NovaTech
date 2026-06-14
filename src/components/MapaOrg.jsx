import './MapaOrg.scss'

export function MapaOrg(){
    return(
        <>
        <h2>Ornanigrama</h2>
        <div className="organigrama">
            <div className="nivel">
                <div className="cargo">Product Owner :Melo Mayta Angelo</div>
            </div>

            <div className="linea"></div>

            <div className="nivel">
                <div className="cargo">Scrum Master :Huarac Valle Manuel Angel</div>
            </div>

            <div className="linea"></div>

            <div className="equipo">
                <div className="cargo">Developer : Leon Mejia Jhassir</div>
                <div className="cargo">Developer : Quispe Orihuela Fernando Gabriel </div>
                <div className="cargo">Developer : Llacctahuaman David</div>
                <div className="cargo">Developer : Quispe Orihuela Fernando Gabriel </div>
            </div>
        </div>
        </>

    )
}
