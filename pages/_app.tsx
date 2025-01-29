import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {useEffect, useState} from "react";
import {TetrislyProvider} from "@virtuslab/tetrisly-react";

export default function App({Component, pageProps}: AppProps) {

    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => setIsClient(true), [])

    return (
        isClient ? (
            <TetrislyProvider>
                <Component {...pageProps} />
            </TetrislyProvider>
        ) : (
            <Component {...pageProps} />
        )
    )
}