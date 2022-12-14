
export default function CardRSSS() {
    return (
        <div className="md:w-72 rounded-3xl md:p-1 text-center flex flex-col ">
            <span className="flex-grow px-1 py-1 text-2xl text-gray-100 border-b-4 border-gray-100 font-mono">
                Redes Sociales
            </span>
            <button type="button" className="inline-flex lg:hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-2xl text-sm px-2 py-1 text-center mr-2 mb-2">
                <a href="https://www.instagram.com/radioliebrejue" target="_blank" rel="noreferrer" className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 -ml-1 w-8 h-8" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
                        </path>
                    </svg>
                    <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                    </span>
                    <div className="text-xl font-mono font-bold pt-0.5">
                        @RadioLiebreJue
                    </div>
                </a>
            </button>
            <button type="button" className="inline-flex lg:hover:bg-[#3b5998]/90  text-white font-medium rounded-2xl text-sm px-2 py-1 text-center mr-2 mb-2">
                <a href="https://www.facebook.com/RadioLiebreJue" target="_blank" rel="noreferrer" className="flex items-center ">
                    <svg className="mr-2 -ml-1 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z" /></svg>
                    <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                    </span>
                    <div className="text-xl font-mono font-bold pt-0.5">
                        @RadioLiebreJue
                    </div>
                </a>
            </button>
            <button type="button" className="inline-flex lg:hover:bg-red-500 text-white font-medium rounded-2xl text-sm px-2 py-1 text-center mr-2 mb-2">
                <a href="https://www.youtube.com/channel/UCL9dFbu9WR7TneH4fZDMyDw" target="_blank" rel="noreferrer" className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="mr-2 -ml-1 w-8 h-8" viewBox="0 0 72 72">
                        <path fill="currentColor" d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z" />
                    </svg>
                    <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                    </span>
                    <div className="text-xl font-mono font-bold pt-0.5">
                        @RadioLiebreJue
                    </div>
                </a>
            </button>
            <span className="flex-grow px-1 py-1 text-2xl text-gray-100 border-b-4 border-gray-100 font-mono">
                Whatsapp
            </span>
            <a href='https://api.whatsapp.com/send?phone=+' target="_blank" rel="noreferrer">
                <button type="button" className="inline-flex lg:hover:bg-green-500 text-white font-medium rounded-2xl text-sm px-6 py-1 text-center mr-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 -ml-1 w-9 h-9" viewBox="0 0 64 64" >
                        <path fill="currentColor" d="M 32 8 C 18.745 8 8 18.297 8 31 C 8 35.509 9.3592187 39.711719 11.699219 43.261719 L 10 56 L 25.400391 53.111328 C 27.497391 53.685328 29.71 54 32 54 C 45.255 54 56 43.703 56 31 C 56 18.297 45.255 8 32 8 z M 32 11.429688 C 37.802 11.370688 43.591453 13.937797 47.439453 18.341797 C 51.323453 22.721797 53.027062 28.950328 51.914062 34.736328 C 50.849062 40.554328 46.923047 45.673609 41.748047 48.474609 C 36.692047 51.185609 30.484922 51.702016 25.044922 49.791016 L 15.263672 51.964844 L 13.734375 52.304688 L 14.023438 50.783203 L 14.023438 50.78125 L 15.373047 42.560547 C 14.511047 41.180547 13.781562 39.733609 13.226562 38.224609 C 12.614562 36.480609 12.2085 34.673703 12.0625 32.845703 C 11.9905 31.931703 11.975828 31.016469 12.048828 30.105469 C 12.065828 29.189469 12.221953 28.286719 12.376953 27.386719 C 12.768953 25.607719 13.316266 23.845141 14.197266 22.244141 C 15.040266 20.632141 16.076563 19.106734 17.351562 17.802734 C 17.947563 17.110734 18.668797 16.544641 19.341797 15.931641 C 20.079797 15.398641 20.785891 14.814953 21.587891 14.376953 C 24.691891 12.444953 28.354 11.501688 32 11.429688 z M 31.996094 14 C 28.803094 14.024 25.583078 14.795031 22.830078 16.457031 C 22.117078 16.830031 21.494937 17.339875 20.835938 17.796875 C 20.240938 18.331875 19.588406 18.814734 19.066406 19.427734 C 17.935406 20.568734 17.022437 21.909266 16.273438 23.322266 C 14.783437 26.167266 14.210203 29.447094 14.533203 32.621094 C 14.895203 35.790094 16.296266 38.815844 18.447266 41.089844 L 18.447266 41.091797 L 18.912109 41.662109 L 18.728516 42.316406 L 16.832031 49.046875 L 24.908203 46.427734 L 24.910156 46.425781 L 25.347656 46.285156 L 25.8125 46.46875 C 30.4305 48.28775 35.818422 47.956875 40.232422 45.671875 C 44.627422 43.360875 48.009703 39.080781 48.970703 34.175781 C 49.971703 29.284781 48.613266 23.975203 45.322266 20.158203 C 42.058266 16.325203 37.078094 14.017 31.996094 14 z M 24.392578 21.248047 C 24.958578 21.250047 26.5625 21.248047 26.5625 21.248047 L 28.732422 26.671875 C 27.960422 27.880875 27.166797 28.555844 26.591797 29.214844 C 26.912797 29.996844 28.228156 31.947406 29.785156 33.316406 C 31.792156 35.076406 33.531437 35.898625 34.773438 36.140625 C 35.423437 35.656625 37.063109 33.699641 37.412109 33.181641 L 42.835938 35.351562 C 42.835937 36.436562 42.695906 37.008797 42.253906 38.216797 C 41.819906 39.424797 39.726844 40.528828 38.714844 40.673828 C 37.812844 40.809828 36.673063 40.861703 35.414062 40.470703 C 34.657063 40.232703 33.679688 39.916859 32.429688 39.380859 C 27.173687 37.135859 23.738609 31.913453 23.474609 31.564453 C 23.219609 31.224453 21.339844 28.757844 21.339844 26.214844 C 21.339844 23.671844 22.690781 22.413531 23.175781 21.894531 C 23.651781 21.375531 24.044578 21.246047 24.392578 21.248047 z" />
                    </svg>
                    <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                    </span>
                    <div className="text-xl font-mono font-bold pt-0.5 ">
                        +56912345678
                    </div>
                </button>
            </a>
        </div>
    )
}