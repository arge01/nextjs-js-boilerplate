import React, { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import MultipleTab from 'component/MultipleTab';

function Menu({ tabs = [] }) {
  const router = useRouter();

  const {
    pages,
    setPages,
    setMenu,
    menu,
    setActive,
    setLike,
    initial,
    setInitial,
  } = useContext(MultipleTab.Context);

  useEffect(() => {
    setMenu(tabs);
  }, [setMenu, tabs]);

  const onChangeQuery = (e) => {
    const name = e.target.name;
    const _ = [...pages, tabs.find((f) => f.query === name)];
    const last = _.filter((f) => f.query === name)?.length || 0;
    const like = {
      ...tabs.find((f) => f.query === name),
      key: pages.length,
      like: last,
    };

    setInitial([...initial, like]);
    setActive(name);
    setPages(_);
    setLike(like);

    router.push({
      query: {
        page: _.map((v) => v?.query),
        active: `${name}`,
        like: `${last}`,
      },
    });
  };
  return (
    <ul className="menu">
      {menu?.map((v, k) => {
        return (
          <li key={k}>
            <a name={v.query} onClick={onChangeQuery}>
              {v.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
