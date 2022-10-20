import React from 'react';
import './App.css';
import Events from './components/Events/Events';
import Marriages from './components/Marriages/Marriages';

function App() {
  return (
    <>
    <div className='container'>
      <header>
      <div className='heading'>Super<span>Admin</span></div>
      <div className='textarea'>
        <input type="text"  className='search' value="Search here"/>
        <button className='marriage'>+Marriage</button>
      </div>
      </header>

      <Marriages/>

      <Events/>


      


    </div>
    </>
 );
}

export default App;
