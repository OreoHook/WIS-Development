import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/css/index.css';
import { AppProvider } from '../context/app';
import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import { fetcher } from '../lib/fetcher';
import { ToastContainer } from 'react-toastify';

const FormModal = dynamic(() => import('../components/form-modal'), {
  ssr: false,
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <SWRConfig
        value={{
          refreshInterval: 0,
          fetcher: fetcher,
        }}
      >
        <Head>
          <title>Добро пожаловать в систему учета преподавателей</title>
        </Head>
        <div className="app">
          <main className="container mx-auto lg:w-3/4 bg-white h-full min-h-screen flex flex-col">
            <Component {...pageProps} />
          </main>
        </div>
        <FormModal />
        <ToastContainer />
      </SWRConfig>
    </AppProvider>
  );
}

export default CustomApp;
