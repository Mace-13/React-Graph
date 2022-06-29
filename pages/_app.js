import React, { useState, useEffect } from 'react';
import { Layout } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return(
    <>
    <Layout>
       {loading ? <div className="loadingImg flex mx-auto pt-12">
        <img src="./loading.gif" alt="" /></div>
         :
      <Component {...pageProps} />
        }  
    </Layout>
   
    </>
    
  )

  }

export default MyApp;
