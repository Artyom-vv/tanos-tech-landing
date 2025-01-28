import "@/styles/globals.css";
import type { AppProps } from "next/app";

import dynamic from 'next/dynamic';

const TetrislyProvider = dynamic(() => import('@virtuslab/tetrisly-react').then(mod => mod.TetrislyProvider), {ssr: false});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <TetrislyProvider>
          <Component {...pageProps} />
      </TetrislyProvider>
  )
}
