import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import Approved from '../components/Approved.js'


function App() {
  const [verification,setVerification] = useState()


  useEffect(()=>{
    axios
    .post('https://front-exercise.z1.digital/evaluations')
    .then((result)=>{
      setVerification(result.data.summary.outcome)
    })
    .catch((err)=>{
    console.log(err)
    })
  }, [])
  


  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
