import { ApiRadio, ApiSongHistory, ApiSongPlaying } from "../../api/api_radio"

export default function CardSons() {
    const { nextSong: nextSong } = ApiRadio();
    const { nextImage: nextImage } = ApiRadio();
    const { songPlating: songPlating } = ApiSongPlaying();
    const { songHistory: songHistory } = ApiSongHistory();
    return (
        <div className="">
            <div className='flex flex-col'>
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white font-mono lg:hover:text-blue-700 border-b-2 border-gray-100">
                    Reproductor Simple
                </h5>
                <a href='http://45.238.20.117:5001/public/radio_liebre_jue' target="_blank" rel="noreferrer">
                    <button type="button" className="inline-flex lg:hover:bg-blue-500 text-white font-medium rounded-2xl text-sm px-4 py-1 text-center mr-8 mb-2">
                        <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 364.59 364.591"
                            className="mr-2 -ml-1 w-7 h-7"
                            style={{ enableBackground: "new 0 0 364.59 364.591" }}
                            xmlSpace="preserve"
                        >
                            <path
                                fill="currentColor"
                                d="M360.655,258.05V25c0-13.807-11.191-25-25-25H130.09c-13.807,0-25,11.193-25,25v206.27
			c-10.569-3.184-22.145-4.271-34.058-2.768C29.527,233.738-0.293,268.3,4.427,305.695c4.719,37.396,42.189,63.464,83.694,58.226
			c40.015-5.049,66.969-37.146,66.969-73.181V50h155.564v146.794c-10.591-3.2-22.19-4.297-34.134-2.79
			c-41.504,5.237-71.323,39.798-66.604,77.193s42.188,63.464,83.694,58.227C332.951,324.458,360.655,293.275,360.655,258.05z"
                            />

                        </svg>
                        <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                        </span>
                        <div className="text-xl font-mono font-bold pt-0.5 ">
                            CLICK AQUI
                        </div>
                    </button>
                </a>
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white font-mono  lg:hover:text-blue-700 ">
                    Estas Escuchando
                </h5>
                <div className="md:w-64 rounded-lg ">
                    <div className="p-2">
                        <div className="flex flex-row mb-1 font-normal text-white border-b-2 border-gray-100 border-slate-500">
                            <div className="flex flex-row pb-1 pt-1">
                                <div className="w-8 h-8 rounded-lg pl-1 pt-1 animate-pulse">
                                    <img src={nextImage}></img>
                                </div>
                            </div>
                            <div className="flex flex-col font-semibold pl-1.5 pt-1 text-xs py-1">
                                <div>{songPlating}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white font-mono lg:hover:text-blue-700 ">
                    Proxima Cancion
                </h5>
                <div className="md:w-64 rounded-lg ">
                    <div className="p-2">
                        <div className="flex flex-row mb-1 font-normal text-white border-b-2 border-gray-100 border-slate-500">
                            <div className="flex flex-row pb-1 pt-1">
                                <div className="w-8 h-8 rounded-lg pl-1 pt-1 animate-pulse">
                                    <img src={nextImage}></img>
                                </div>
                            </div>
                            <div className="flex flex-col font-semibold pl-1.5 pt-1 text-xs py-1">
                                <div>{nextSong}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}