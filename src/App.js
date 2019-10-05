import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Ball from './components/Ball'
import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">

      <Lottery/>
      {/* <Ball num={17}/>
      <Ball num={13}/>
      <Ball num={11}/>
      <Ball num={9}/> */}
     <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
    </div>
  );
}

export default App;
