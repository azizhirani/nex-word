import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
// import DarkMode from '.src/component/darkmode/DarkMode';
import { Routes, Route} from 'react-router-dom';


function App() {
  const [mode,setMode]= useState('light');//check darkmode enabled state 
  // const [backmode,setBackMode] = useState('#27282B');
  const [alert, setAlert] = useState();

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);  
  }
  
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#27282B';
      showAlert("Dark Mode has been Enabled","success")
      document.title = "A2Z Word - Dark Mode";
      setInterval(()=>{
        document.title = "A2Z Word is Amazing "
      },2000);
      setInterval(()=>{
        document.title = "Install A2Z Word"
    },1500);
    }
  else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success")
      document.title = "A2Z Word - Light Mode";
      setInterval(()=>{
        document.title = "A2Z Word is Amazing "
      },2000);
      setInterval(()=>{
        document.title = "Install A2Z Word"
    },1500);
    //   setInterval(()=>{
    //     document.title = "A2Z Word is Amazing "
    //   },2000);
    //   setInterval(()=>{
    //     document.title = "Install A2Z Word"
    // },1500);
    // }
  }
}
  return (
    <>
        <Navbar title="./public/favicon.ico" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            {/* /users-->Component 1
            /user/home -->Component 2  */}
            <Route  path="/About" element={<About  mode={mode} toggleMode={toggleMode}/>}>
            </Route>
            <Route   path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
    </>
  );
}

export default App;

