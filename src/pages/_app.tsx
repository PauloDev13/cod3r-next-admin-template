import type { AppProps } from 'next/app';
import React from 'react';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProvider } from '../data/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
