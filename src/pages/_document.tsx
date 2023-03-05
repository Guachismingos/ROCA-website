import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

export default function Document() {
  return (
    <Html lang="es" className="h-[100svh] flex flex-col">
      <Head />
      <body className="flex flex-col flex-1 bg-base-dark">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
