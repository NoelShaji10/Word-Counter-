import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
      
      <Navbar title="TextUtils" about="About TU" mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <TextForm heading="Enter Text To Analyze"/>
      </div>
      
    </>
  );
}

export default App;
