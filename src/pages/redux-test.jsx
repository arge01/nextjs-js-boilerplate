import React, { useEffect } from 'react';

import Layout from 'component/Layout';

import { useSelector, useDispatch } from 'react-redux';
import { findAll } from 'services/json-placeholder';

function ReduxTest() {
  const dispatch = useDispatch();
  const jsonPlaceholder = useSelector((state) => state.jsonPlaceholder);

  useEffect(() => {
    dispatch(findAll());
  }, [dispatch]);
  return (
    <Layout title="Redux Test">
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
