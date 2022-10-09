import React from 'react';

import MultipleTab from 'component/MultipleTab';
import Page from 'views/A';

function Tab() {
  const menu = [
    {
      id: 1,
      name: 'A tab',
      query: 'a-tab',
    },
    {
      id: 2,
      name: 'B tab',
      query: 'b-tab',
    },
    {
      id: 3,
      name: 'C tab',
      query: 'c-tab',
    },
  ];
  return (
    <MultipleTab.Container menu={menu}>
      {`<!-- A tab -->`}
      <MultipleTab.Page name="a-tab" initialData={{ data: 'a-tab-data' }}>
        <Page />
      </MultipleTab.Page>
      {`<!-- A tab -->`}

      {`<!-- B tab -->`}
      <MultipleTab.Page name="b-tab" initialData={{ data: 'a-tab-data' }}>
        <Page />
      </MultipleTab.Page>
      {`<!-- B tab -->`}

      {`<!-- C tab -->`}
      <MultipleTab.Page name="c-tab" initialData={{ data: 'a-tab-data' }}>
        <Page />
      </MultipleTab.Page>
      {`<!-- C tab -->`}
    </MultipleTab.Container>
  );
}

export default Tab;
