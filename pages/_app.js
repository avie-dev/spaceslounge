import "../styles/globals.css";
import "../styles/custom.css";

import LogoLight from "../public/LogoLight.svg";
import LogoDark from "../public/LogoDark.svg";

import Navbar from "../components/Navbar/navbar";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [logo, setLogo] = useState(LogoDark);

  const themeToggling = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="main-container">
      <Navbar themeToggling={themeToggling} checked={true} Logo={logo} />
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
