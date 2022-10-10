/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

import MultipleTab from 'component/MultipleTab';
import { useRouter } from 'next/router';

function Items({ children, params }) {
  const router = useRouter();

  const {
    setActive,
    active,
    setPages,
    pages,
    setLike,
    like,
    menu,
    setInitial,
  } = useContext(MultipleTab.Context);

  useEffect(() => {
    if (!pages.length && params) {
      let page = [];
      let _ = {};
      if (Array.isArray(params?.page)) {
        page = params?.page?.map((query, key) => {
          return {
            id: menu.find((f) => f?.query === query)?.id,
            name: menu.find((f) => f?.query === query)?.name,
            query,
            key,
          };
        });

        setPages([...page]);
        _ = page
          .filter((f) => f?.query === params?.active)
          .find((_f, k) => k === Number(params?.like) - 1);
        setInitial([...page]);
      } else {
        const query = params?.page;
        _ = {
          id: menu.find((f) => f?.query === query)?.id,
          name: menu.find((f) => f?.query === query)?.name,
          like: params?.like,
          query,
          key: 0,
        };
        if (_?.id) {
          setPages([_]);
          setInitial([_]);
        }
      }
      setLike({ ..._, like: Number(params?.like) });
      setActive(params?.active);
    }
  }, [params]);

  const del = (v) => {
    setPages([...pages.filter((f) => f !== v)]);
  };

  const onChangeActivePage = (v) => {
    let i = 0;
    const _ = pages.reduce((acc, item, key) => {
      if (item?.query === v?.query) {
        i++;
        item.like = i;
        item.key = key;
        item.initailData = {};
        acc.push(item);
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    setLike(_?.[v?.index]);
    setActive(v?.query);
    router.push({
      query: {
        page: pages.map((v) => v?.query),
        active: `${v?.query}`,
        like: `${_?.[v?.index]?.like}`,
      },
    });
  };
  return (
    <section className="menu-items">
      <ul>
        {pages.map((v, k) => {
          return (
            <li className={`${like?.key === k ? 'active' : ''}`} key={k}>
              <span onClick={() => del(v)} className="delete">
                <i className="fas fa-times"></i>
              </span>
              <button onClick={() => onChangeActivePage({ index: k, ...v })}>
                {v?.name}
              </button>
            </li>
          );
        })}
      </ul>
      <section className="items">
        {children?.find((f) => f?.props?.name === active)}
      </section>
    </section>
  );
}

export default Items;
