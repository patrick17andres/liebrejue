import { ApiSongHistory } from "../../api/api_radio"
export default function CardLastSong() {
    const { songHistory: songHistory } = ApiSongHistory();
    return (
        <div className="">
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white font-mono  lg:hover:text-blue-700 ">
                Ultimas Canciones
            </h5>
            <div className="md:w-full  rounded-lg ">
                <div className="p-0 md:pl-0 pl-6 flex md:flex-row flex-col md:space-x-4 justify-center text-center">
                    {songHistory != null ?
                        songHistory.map(song => {
                            return (
                                <div key={song.sh_id} className="mb-1 font-normal text-white">
                                    <div className="flex flex-row mb-1 font-normal text-white md:border-b-0 border-b-2 border-gray-100 border-slate-500">
                                        <div className="pb-1 pt-1">
                                            <div className="w-8 h-8 rounded-lg pl-1 pt-1 animate-pulse">
                                                <img src={song.song.art}></img>
                                            </div>
                                        </div>
                                        <div className="font-semibold pl-1.5 pt-1 text-xs py-1">
                                            <div>{song.song.text}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        "ESTACION APAGADA"}

                </div>
            </div>
        </div>
    )
}