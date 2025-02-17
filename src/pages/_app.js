import '@/styles/globals.css';
import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
   const router = useRouter();

   useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
}, [router.pathname]);

  return (
    <>
      <Head>
        <title>Tavestra</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}
