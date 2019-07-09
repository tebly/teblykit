//Changed by Adam Copeland.

import React from 'react';
import './App.css';
import AwesomeButton from './shared/components/Button/myFirstButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AwesomeButton buttonName = "Facebook" buttonWidth = {150}/>
        <AwesomeButton buttonName = "Instagram" buttonColor = '#ee3dff'/>
      </header>
    </div>
  );
}

export default App;
