import React from 'react';

import { default as NextHead } from 'next/head';

function Head({ title }) {
  return (
    <NextHead>
      <title>{`Arif GEVENCİ | ${title}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    </NextHead>
  );
}

export default Head;
