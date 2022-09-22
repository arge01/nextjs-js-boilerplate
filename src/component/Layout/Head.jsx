/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';

import { default as NextHead } from 'next/head';

function Head({ title }) {
  return (
    <NextHead>
      <title>{`Arif GEVENCİ | ${title ? title : 'Home'}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700,800&display=swap&subset=latin-ext"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
    </NextHead>
  );
}

export default Head;
