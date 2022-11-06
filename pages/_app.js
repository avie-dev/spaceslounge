import "../styles/globals.scss";
import "../styles/globals.scss";
import "../components/Header/header.scss";
import "../components/Triangle/triangle.scss";
import "../components/Button/button.scss";
import "../components/Light and Dark/lightAndDark.scss";
import "../components/Sign-Up Page/signup.scss";
import "../components/Navbar/navbar.scss";
import "../components/WebsiteInformation/What is Spaceslounge/information1.scss";
import "../components/WebsiteInformation/Why Spaces Lounge/information2.scss";
import "../styles/404.scss";

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
