import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/styles/globals.css";

import { useEffect } from "react";
import Layout from "@/shared/Layout";

const agencyFont = localFont({
  src: "../assets/fonts/AGENCYR.woff",
});

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
console.log("222");

  }, [])
  

  return (
    <main className={agencyFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
