import React from 'react';
import HookMqtt from './components/Hook'
import './App.css';

const myStyle = {
  fontSize: 10,
}

function App() {
  return (
    <div className="App">
      <HookMqtt />

      <p style= { myStyle } > by Atlas Automation </p>
    </div>
  );
}

export default App;
