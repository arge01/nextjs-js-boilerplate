/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';

import { default as NextHead } from 'next/head';

function Head({ title }) {
  return (
    <NextHead>
      <title>{`Arif GEVENCİ | ${title ? title : 'Home'}`}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;
