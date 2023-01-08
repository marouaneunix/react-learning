import { MantineProvider } from '@mantine/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

export default CustomApp;
