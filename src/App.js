import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1 className='text'>Stopwatches</h1>
      </header>
      <header className='App-header'>
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
