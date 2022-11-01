import "../styles/globals.scss";
import "../styles/globals.scss";
import "../components/Home Page/home.scss";
import "../components/Triangle/triangle.scss";
import "../components/Button/button.scss";
import "../components/Light and Dark/lightAndDark.scss";
import "../components/Sign-Up Page/signup.scss";
import "../components/Navbar/navbar.scss";
import "../components/Website Information/what is spaceslounge/information-1.scss";

import LogoLight from "../public/LogoLight.svg";
import LogoDark from "../public/LogoDark.svg";

import Navbar from "../components/Navbar/navbar";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Navbar
        // themeToggling={themeToggling}
        // defaultChecked={darkMode}
        Logo={LogoLight}
      />
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
