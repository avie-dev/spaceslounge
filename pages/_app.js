import "../styles/globals.scss";
import "../styles/globals.scss";
import "../components/HomePage/home.scss";
import "../components/Triangle/triangle.scss";
import "../components/Button/button.scss";
import "../components/LightAndDark/lightAndDark.scss";
import "../components/SignUpPage/signup.scss";
import "../components/Navbar/navbar.scss";
import "../components/WebsiteInformation/WhatIsSpaceslounge/information.scss";

import LogoLight from "../public/LogoLight.svg";
import LogoDark from "../public/LogoDark.svg";

import Navbar from "../components/Navbar/navbar";

import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [logo, setLogo] = useState(LogoLight);

  const themeToggling = (e) => {
    const switchToggle = e.target.checked;
    if (switchToggle) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div>
      <Navbar
        themeToggling={themeToggling}
        // defaultChecked={darkMode}
        Logo={logo}
      />
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
