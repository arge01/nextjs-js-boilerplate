import React from 'react';

import { MultipleTab } from 'component';
import { useQueryRouter } from 'hooks';

function Container({ children, menu }) {
  const [params, setParams] = useQueryRouter();
  return (
    <div className="capsule-tab-menu">
      <section className="tab-menu">
        <MultipleTab>
          <MultipleTab.Menu tabs={menu} />
          <MultipleTab.Items params={params} setParams={setParams}>
            {children}
          </MultipleTab.Items>
        </MultipleTab>
      </section>
    </div>
  );
}

export default Container;
