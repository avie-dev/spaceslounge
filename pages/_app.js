import "../styles/globals.css";
import "../styles/custom.css";

import Navbar from "../components/Navbar/navbar";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
