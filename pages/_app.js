import Head from "components/Head";
import { theme } from "/styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
