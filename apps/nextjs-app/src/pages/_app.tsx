import {AppProps} from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const CustomApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>Daniel Giljam</title>
                <link href={"/icon.svg"} rel={"icon"} />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default CustomApp;
