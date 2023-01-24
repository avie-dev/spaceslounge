import React from "react";
import Head from "next/head";
import { Poppins } from "@next/font/google";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Spaces Lounge</title>
        <meta
          name="description"
          content="A place where you can find the upcoming Twitter spaces"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={poppins.className}>{children}</main>
      <Footer />
    </>
  );
}
