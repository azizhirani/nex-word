import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
  {/* <Navbar title="A212 React App" aboutText="About A212"/> */}
  <Navbar title="A212 React App" />
  <div className='container  my-3'>  <TextForm heading="Enter Text to Analyze Below"/></div>

  </>
  );
}

export default App;
