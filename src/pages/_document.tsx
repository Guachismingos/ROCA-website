import { Html, Head, Main, NextScript } from "next/document";
import { lazy } from "react";

const Header = lazy(() => import("@/shared/Header"));
const Footer = lazy(() => import("@/shared/Footer"));

export default function Document() {
  return (
    <Html lang="es" className="h-[100svh] flex flex-col">
      <Head/>
      <body className="flex flex-col flex-1 bg-base-dark">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
