import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/styles/globals.css";

const agencyFont = localFont({
  src: "../assets/fonts/AGENCYR.woff",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={agencyFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
