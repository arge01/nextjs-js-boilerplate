/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

import MultipleTab from 'component/MultipleTab';
import { useRouter } from 'next/router';

function Items({ children, params }) {
  const router = useRouter();

  const { setActive, active, setPages, pages, setLike, menu, setInitial } =
    useContext(MultipleTab.Context);

  useEffect(() => {
    if (!pages.length && params) {
      let _ = {};
      if (Array.isArray(params?.page)) {
        for (let index = 0; index < params?.page?.length; index++) {
          const query = menu.find((f) => f?.query === params?.page?.[index]);
          pages[index] = {
            id: query?.id,
            name: query?.name,
            like:
              pages?.filter((f) => f?.query === query?.query)?.length + 1 || 1,
            query: query?.query,
            key: index,
          };
          setPages([...pages]);
          setInitial([...pages]);
        }
      } else {
        const query = params?.page;
        for (let index = 0; index < params?.like; index++) {
          if (Number(index) + 1 === Number(params?.like)) {
            pages[index] = {
              id: menu.find((f) => f?.query === query)?.id,
              name: menu.find((f) => f?.query === query)?.name,
              like: index + 1,
              query,
              key: index,
            };
          } else {
            pages[index] = {
              id: menu.find((f) => f?.query === query)?.id,
              name: menu.find((f) => f?.query === query)?.name,
              like: index + 1,
              query,
              key: index,
              passive: true,
            };
          }
        }
        _ = {
          id: menu.find((f) => f?.query === query)?.id,
          name: menu.find((f) => f?.query === query)?.name,
          like: params?.like,
          query,
          key: 0,
        };
        if (_?.id) {
          setPages([...pages]);
          setInitial([...pages]);
        }
      }
      setLike(_);
      setActive(params?.active);
    }
  }, [params]);

  const del = (v) => {
    const d = pages[pages.find((f) => f === v)?.key];
    d.passive = true;
    setPages(pages);

    const f = pages.filter((f) => !f?.passive && f !== v);
    let _ = {};

    if (Number(d?.key) === Number(f.length)) {
      _ = f[f.length - 1] || {};
    } else {
      _ = f[f?.length - v?.key] || {};
    }
    setLike(_);
    setActive(_?.query);

    if (_?.key) {
      router.push({
        query: {
          page: pages.filter((f) => !f?.passive).map((v) => v?.query),
          active: `${_.query}`,
          like: `${_.like}`,
        },
      });
    } else {
      router.push({ query: undefined });
    }
  };

  const onChangeActivePage = async (v) => {
    await setLike(v);
    await setActive(v?.query);

    router.push({
      query: {
        page: pages.filter((f) => !f?.passive).map((v) => v?.query),
        active: `${v?.query}`,
        like: `${v?.like}`,
      },
    });
  };
  return (
    <section className="menu-items">
      <ul>
        {pages.map((v, k) => {
          return (
            <React.Fragment key={k}>
              {!v?.passive && (
                <li
                  className={`${
                    v?.query === params?.active &&
                    Number(v?.like) === Number(params?.like)
                      ? 'active'
                      : ''
                  }`}
                >
                  <span onClick={() => del(v)} className="delete">
                    <i className="fas fa-times"></i>
                  </span>
                  <button onClick={() => onChangeActivePage({ ...v })}>
                    {v?.name}
                  </button>
                </li>
              )}
            </React.Fragment>
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
