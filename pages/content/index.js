import dynamic from 'next/dynamic'
import InicioRadio from "./grups/inicio-radio";
import Extras from "./grups/extras";
import { Suspense } from 'react'
const PlayerMusic = dynamic(() => import('../components/musicplayer'), {
    ssr: false,
})
export default function indexContent() {
    return (
        <div>
            <Suspense fallback={`Loading...`}>
                <PlayerMusic />
            </Suspense>
            <div className="">
                <InicioRadio />
            </div>
            <div className="">
                <Extras />
            </div>
        </div>
    )
} 