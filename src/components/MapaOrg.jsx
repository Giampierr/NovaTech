import './MapaOrg.scss'

export function MapaOrg(){
    return(
        <div class="organigrama">
    <div class="nivel">
        <div class="cargo">Product Owner</div>
    </div>

    <div class="linea"></div>

    <div class="nivel">
        <div class="cargo">Scrum Master</div>
    </div>

    <div class="linea"></div>

    <div class="equipo">
        <div class="cargo">Frontend</div>
        <div class="cargo">Backend</div>
        <div class="cargo">QA Tester</div>
    </div>
</div>
    )
}