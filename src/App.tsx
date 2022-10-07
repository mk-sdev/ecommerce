import React from 'react';
import './App.css';
import Topnav from './components/Topnav';



function App() {
  return (
    <div className="App">
      <header className="App-header">
<Topnav></Topnav>
        <p>
        
          Edit <code className="font-bold text-3xl">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
