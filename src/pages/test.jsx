/* eslint-disable react-hooks/exhaustive-deps */
import Layout from 'component/Layout';
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { findAll } from 'services/json-placeholder';

function ReduxTest() {
  const dispatch = useDispatch();
  const jsonPlaceholder = useSelector((state) => state.jsonPlaceholder);

  const [data, setData] = useState(false);

  useEffect(() => {
    dispatch(findAll());
  }, []);
  return (
    <Layout>
      <div className="container">
        <ul className="row json-placeholder">
          {jsonPlaceholder.loading && <li className="col-12">...loading</li>}
          {jsonPlaceholder.isSuccess && (
            <>
              {jsonPlaceholder.entities.map((v) => (
                <li className="col-12" key={v.id}>
                  <b>title: </b>
                  {v.title}
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </Layout>
  );
}

export default ReduxTest;
