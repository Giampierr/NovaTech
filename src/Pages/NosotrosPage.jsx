import { MapaOrg } from "../components/MapaOrg"
import { Mision } from "../components/Mision"
import { ObjPrin } from "../components/ObjPrin"
import { SliderCv } from "../components/SliderCv"
import { MatrizRes } from "../components/MatrizRes"

export function NosotrosPage(){
    return(
        <main>
            <MapaOrg></MapaOrg>
            <Mision></Mision>
            <ObjPrin></ObjPrin>
            <SliderCv></SliderCv>
            <MatrizRes></MatrizRes>
        </main>
    )
}