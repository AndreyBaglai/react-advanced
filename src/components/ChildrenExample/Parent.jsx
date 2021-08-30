import React from 'react';
import Child from './Child';

export default function Parent() {
  return (
    <div>
      <Child>
        <div style={{ border: '1px solid #eeeeee' }}>
          <header>Props children</header>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
          <button>Button</button>
        </div>
      </Child>
    </div>
  );
}
