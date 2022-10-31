import "../styles/globals.scss";
import "../components/Home Page/home.scss";
import "../components/Triangle/triangle.scss";
import "../components/Button/button.scss";
import "../components/Light and Dark/lightAndDark.scss";
import "../components/Sign-Up Page/signup.scss";
import "../components/Navbar/navbar.scss";

import LogoLight from "../public/LogoLight.svg";
import LogoDark from "../public/LogoDark.svg";

import Navbar from "../components/Navbar/navbar";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function MyApp({ Component, pageProps, router }) {
  const [logo, setLogo] = useState(LogoLight);
  const [darkMode, setDarkMode] =
    typeof window !== "undefined" ? useLocalStorage("darkMode", false) : "";

  const themeToggling = (e) => {
    const togglerButton = e.target.checked;
    togglerButton ? setDarkMode(true) : setDarkMode(false);
  };

  useEffect(() => {
    if (darkMode == true) {
      document.body.classList.add("dark");
      setLogo(LogoDark);
    } else {
      document.body.classList.remove("dark");
      setLogo(LogoLight);
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar themeToggling={themeToggling} Logo={logo} />
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
