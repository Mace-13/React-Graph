import React, {useState, useEffect } from 'react';
import { FormspreeProvider } from '@formspree/react';
import { Layout } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return(
  <FormspreeProvider project="1975188468921269385">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </FormspreeProvider>
  
  ) 
}

export default MyApp;
