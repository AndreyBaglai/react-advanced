import React from 'react';
import ParentTextInput from './components/RefExample/ParentTextInput';

import './App.css';
import ParentLazyComponent from './components/lazyExample/ParentLazyComponent';

function App() {
  return (
    <div className="App">
      <ParentTextInput />
      <ParentLazyComponent />
    </div>
  );
}

export default App;
