import React, { createContext, useState } from 'react';

import Menu from './Menu';
import Items from './Items';
import Page from './Page';
import Container from './Container';

const Context = createContext();

function MultipleTab({ children }) {
  const [pages, setPages] = useState([]);
  const [menu, setMenu] = useState([]);
  const [active, setActive] = useState(null);
  const [initial, setInitial] = useState([]);
  const [like, setLike] = useState({});

  const handleData = (initailData, key) => {
    const value = initial.map((v) => {
      if (v?.key === key) {
        return {
          ...v,
          initailData,
        };
      }
      return { ...v };
    });

    setInitial(value);
    setLike({ ...like, initailData });
  };
  return (
    <Context.Provider
      value={{
        pages,
        setPages,
        menu,
        setMenu,
        active,
        setActive,
        initial,
        setInitial,
        like,
        setLike,
        handleData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

Object.assign(MultipleTab, {
  Menu,
  Items,
  Page,
  Container,
  Context,
});

export default MultipleTab;
