import React from 'react';

import Layout from '../component/Layout';

import Link from 'next/link';

function Home() {
  return (
    <Layout className="d-flex justify-content-center align-items-center min-vh-100">
      <p className="row w-100 align-items-center justify-content-center p-3">
        Developer By{' '}
        <span className="font-weight-bold text-light bg-dark p-1">
          Arif GEVENCİ
        </span>
        <Link href="redux-test">
          <a className="d-flex w-100 font-weight-bold text-dark align-items-center justify-content-center p-3">
            <i className="fas fa-arrow-right"></i> {`{redux} test`}{' '}
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
      </p>
    </Layout>
  );
}

export default Home;
