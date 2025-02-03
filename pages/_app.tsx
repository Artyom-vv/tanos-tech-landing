import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {useEffect, useState} from "react";
import {TetrislyProvider, theme} from "@virtuslab/tetrisly-react";

export default function App({Component, pageProps}: AppProps) {

    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => setIsClient(true), [])

    return (
        isClient ? (
            <TetrislyProvider theme={{
                texts: {
                    "$typo-hero-large": {
                        ...theme.texts["$typo-hero-large"],
                        fontSize: '48px',
                        lineHeight: '64px',
                        letterSpacing: '-0.02em'
                    },
                    "$typo-header-3xLarge": {
                        ...theme.texts["$typo-header-3xLarge"],
                        letterSpacing: '-0.02em'
                    },
                }
            }}>
                <Component {...pageProps} />
            </TetrislyProvider>
        ) : (
            <Component {...pageProps} />
        )
    )
}