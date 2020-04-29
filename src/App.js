import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message/>
      <Greet name="Ram Praneeth" heroName="iron man">
        <p>Yes i am</p>
      </Greet>
      <Greet name="Naga Pramod" heroName="hulk"/>
    </div>
  );
}

export default App;
