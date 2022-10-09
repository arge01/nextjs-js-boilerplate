import React from 'react';

import MultipleTab from 'component/MultipleTab';

function Container({ children, menu }) {
  return (
    <div className="capsule-tab-menu">
      <section className="tab-menu">
        <MultipleTab>
          <MultipleTab.Menu tabs={menu} />
          <MultipleTab.Items>{children}</MultipleTab.Items>
        </MultipleTab>
      </section>
    </div>
  );
}

export default Container;
