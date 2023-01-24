import React from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

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
      <main>{children}</main>
      <Footer />
    </>
  );
}
