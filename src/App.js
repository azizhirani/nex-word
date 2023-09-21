import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
// import DarkMode from '.src/component/darkmode/DarkMode';

function App() {
  const [mode,setMode]= useState('light');//check darkmode enabled state 

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title="A212 React App" aboutText="About A212"/> */}

    <Navbar title="A212 Word" mode={mode} toggleMode={toggleMode}/>
    <div className='container  my-3'>
      <TextForm heading="Enter Text to Analyze Below" mode={mode}/>
      {/* <About /> */}
      </div>
  
    </>
  );
}

export default App;
