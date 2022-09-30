import React, { useState, useEffect, } from 'react';
export const URLAPI = "http://45.238.20.117:5001/api/nowplaying"
export const URLRADIO = "http://45.238.20.117:8000/radio.mp3"

export function ApiRadio() {
    const [nextSong, setNextSong] = useState('');
    const [nextImage, setNextImage] = useState([]);
    useEffect(() => {
        CallApi();
        setInterval(() => { CallApi() }, 5000);
    }, []);

    async function CallApi() {
        await fetch(URLAPI)
            .then((response) => response.json())
            .then((data) => {
                setNextSong(data[0].playing_next.song.text)
                setNextImage(data[0].playing_next.song.art)

            },
                (error) => {
                    console.log(error);
                });
    }

    return { nextSong, nextImage };
}

export function ApiSongPlaying() {
    const [songPlating, setSongPlating] = useState('');
    useEffect(() => {
        CallApi();
        setInterval(() => { CallApi() }, 10000);
    }, []);

    async function CallApi() {
        await fetch(URLAPI)
            .then((response) => response.json())
            .then((data) => {
                setSongPlating(data[0].now_playing.song.text)
            },
                (error) => {
                    console.log(error);
                });
    }

    return { songPlating };
}

export function ApiSongHistory() {
    const [songHistory, setSongHistory] = useState([]);
    useEffect(() => {
        CallApi();
        setInterval(() => { CallApi() }, 50000);
    }, []);

    async function CallApi() {
        await fetch(URLAPI)
            .then((response) => response.json())
            .then((data) => {
                setSongHistory(data[0].song_history)
            },
                (error) => {
                    console.log(error);
                });
    }

    return { songHistory };
}



