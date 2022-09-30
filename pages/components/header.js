import Head from 'next/head';
import Navbar from './nav';
import Script from 'next/script';

export default function Header() {
    return (
        <div>
            <Head>
                <title>Radio Liebre Jue</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></Script>
            <Navbar />
        </div>

    );
}