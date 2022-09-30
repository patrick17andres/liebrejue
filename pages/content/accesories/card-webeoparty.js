import React, { useState, useEffect, } from 'react';
import { ApiWebeo } from "../../api/api_webeo"
import Image from 'next/image'
import Script from 'next/script'
import Imagen1 from '../../../public/img/conejo-avatar.jpg'
export default function CardWebeoParty() {
    const { dataMemes: dataMemes } = ApiWebeo();
    const Imagen1 = dataMemes[0]?.Secure_url;
    const Imagen2 = dataMemes[1]?.Secure_url;
    const Imagen3 = dataMemes[2]?.Secure_url;
    const Imagen4 = dataMemes[3]?.Secure_url;
    const Imagen5 = dataMemes[4]?.Secure_url;

    return (
        <div className='p-1 py-2'>
            <Script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></Script>
            <div className='py-4'>
                <a href="https://webeoparty.com/" target="_blank" rel="noreferrer" className="flex items-center ">
                    <img src="https://i.ibb.co/sWbhjK2/avatar-jerry.jpg" className="mr-3 h-12 w-12 sm:h-9 md:w-12 md:h-12 rounded-lg md:rounded-full" alt="Logo" />
                    <span className="flex-grow px-1 py-1 text-2xl text-gray-100 border-b-4 border-gray-100 font-mono lg:hover:border-yellow-600 lg:hover:text-yellow-500">
                        Webeo Party
                    </span>
                </a>
            </div>
            <div id="indicators-carousel" className="relative" data-carousel="slide">
                <div className="relative overflow-hidden rounded-lg md:w-96 h-96 md:h-96 lg:w-full lg:h-screen ">
                    <a href="https://webeoparty.com/" target="_blank" rel="noreferrer">
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                            <img src={Imagen1}
                                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                        </div>
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                            <img src={Imagen2}
                                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                        </div>
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                            <img src={Imagen3}
                                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                        </div>
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                            <img src={Imagen4}
                                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                        </div>
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                            <img src={Imagen5}
                                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                        </div>
                    </a>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}