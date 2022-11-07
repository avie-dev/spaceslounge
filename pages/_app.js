import "../styles/globals.scss";
import "../styles/custom.scss";

import LogoLight from "../public/LogoLight.svg";
import LogoDark from "../public/LogoDark.svg";

import Navbar from "../components/Navbar/navbar";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [logo, setLogo] = useState(LogoDark);

  // Light Theme
  const lightTheme = () => {
    document.body.classList.add("light");
    setLogo(LogoLight);
  };
  // Dark Theme
  const darkTheme = () => {
    document.body.classList.remove("light");
    setLogo(LogoDark);
  };

  // Theme Changing Function
  const themeToggling = (e) => {
    const switchToggle = e.target.checked;
    switchToggle ? darkTheme() : lightTheme();
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
