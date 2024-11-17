import {Roboto} from "@next/font/google";
import {AppProps} from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const roboto = Roboto({
    weight: "300",
    subsets: ["latin"],
    display: "swap",
});

const CustomApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>Daniel Giljam</title>
                <link href={"/icon.svg"} rel={"icon"} />
            </Head>
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
};

export default CustomApp;
