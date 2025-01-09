import React from 'react';

import Layout from 'component/Layout';

import Link from 'next/link';

function Custom404() {
  return (
    <Layout className="d-flex justify-content-center align-items-center min-vh-100">
      <p className="row w-100 align-items-center justify-content-center p-3">
        Error
        <span className="font-weight-bold bg-dark p-1 text-light">404</span>
        <Link href="/">
          <a className="d-flex w-100 font-weight-bold align-items-center justify-content-center text-decoration-underline p-1 text-dark">
            go {`{home}`}
          </a>
        </Link>
      </p>
    </Layout>
  );
}

export default Custom404;
