import React, { Profiler } from 'react';
import ParentTextInput from './components/RefExample/ParentTextInput';
import ParentLazyComponent from './components/LazyExample/ParentLazyComponent';
import PortalExample from './components/Portal/PortalExample';
import Parent from './components/ChildrenExample/Parent';

import './App.css';

function App() {
  return (
    <div className="App">
      <Profiler id="ParentTextInput" onRender={(...data) => console.log('Profiler info:', data)}>
        <ParentTextInput />
      </Profiler>

      <ParentLazyComponent />
      {/* <TopComponent /> */}

      <PortalExample />

      <Parent />
    </div>
  );
}

export default App;
