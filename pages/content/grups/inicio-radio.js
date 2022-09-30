import Carrusel from "../accesories/carrusel"
import Chat from "../accesories/chat"
import ClimaWidget from "../accesories/wheater-clima"
import CardTime from "../accesories/card-time"
import CardRSSS from "../accesories/card-rrss"
import CardSons from "../accesories/card-songs"
import CardLastSong from "../accesories/card-lastsong"
export default function InicioRadio() {
    return (
        <div className="">
            <div className="flex md:flex-row flex-col">
                <div className="md:w-60 p-1">
                    <CardRSSS />
                </div>
                <div className="md:w-8/12 p-0 h-full md:pt-4 lg:pl-14">
                    <Carrusel />
                </div>
                <div className="md:w-72 md:p-10 md:pt-0 lg:pr-2 pl-4 flex flex-col justify-center">
                    <CardSons />
                </div>
            </div>
            <div className="justify-center text-center">
                <CardLastSong />
            </div>
        </div>
    )
}