import React from 'react';

import Layout from 'component';

import Link from 'next/link';

function Home() {
  return (
    <Layout className="flex min-h-screen items-center justify-center">
      <p className="p-3">
        Developer By{' '}
        <span className="bg-black p-1 font-bold text-white">Arif GEVENCİ</span>
        <Link href="redux-test">
          <a className="flex w-full items-center justify-center p-1">
            <span className="p-1">{`{redux} test`}</span>
            <i className="fas fa-arrow-right"></i>{' '}
          </a>
        </Link>
      </p>
    </Layout>
  );
}

export default Home;
