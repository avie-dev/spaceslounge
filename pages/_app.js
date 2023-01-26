import "../styles/globals.css";
import "../styles/custom.css";

import { ThemeProvider } from "next-themes";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component key={router.pathname} {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
