import dynamic from 'next/dynamic'
import InicioRadio from "./grups/inicio-radio";
import Extras from "./grups/extras";
export default function indexContent() {
    const PlayerMusic = dynamic(() => import('./accesories/musicplayer'), {
        ssr: false,
    })
    return (
        <div>
            <PlayerMusic />
            <div className="">
                <InicioRadio />
            </div>
            <div className="">
                <Extras />
            </div>            
        </div>
    )
} 