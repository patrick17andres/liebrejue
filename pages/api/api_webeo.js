import React, { useState, useEffect, } from 'react';

const URLAPI = 'https://api.webeoparty.com/start/0/limit/5'


export function ApiWebeo() {
    const [dataMemes, setDataMemes] = useState([]);

    useEffect(() => {
        CallApi();
    }, []);

    async function CallApi() {
        await fetch(URLAPI)
            .then((response) => response.json())
            .then((data) => {
                setDataMemes(data)                          
            }).catch(error => {
                console.log(error)
            });
    }

    return {dataMemes};
}