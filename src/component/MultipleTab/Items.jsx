import React, { useContext } from 'react';

import MultipleTab from 'component/MultipleTab';
import { useRouter } from 'next/router';

function Items({ children }) {
  const router = useRouter();

  const { setActive, active, setPages, pages, setLike, like } = useContext(
    MultipleTab.Context
  );

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
