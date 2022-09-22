import React from 'react';

import Layout from 'component/Layout';

import Link from 'next/link';

function Custom500() {
  return (
    <Layout className="d-flex justify-content-center align-items-center min-vh-100">
      <p className="row w-100 align-items-center p-3 justify-content-center">
        Error
        <span className="font-weight-bold text-light bg-dark p-1">500</span>
        <Link href="test">
          <a className="d-flex w-100 font-weight-bold text-dark align-items-center p-1 justify-content-center text-decoration-underline">
            go {`{home}`}
          </a>
        </Link>
      </p>
    </Layout>
  );
}

export default Custom500;
