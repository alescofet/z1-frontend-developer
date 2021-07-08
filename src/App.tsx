import React, { useState, useEffect } from 'react';
import {Link, Switch, Route} from "react-router-dom";
import './App.scss';
import axios from 'axios';
import Intro from './components/Intro'
import Camera from './components/Camera';
import Approved from './components/Approved';
import TryAgain from './components/TryAgain';



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
      <div>
        <Link to="/"><p>BankClient</p> </Link>
      <hr />
      </div>
      </header>
      <Switch>

          <Route  
            path="/"
            exact
            component={() => <Intro />}
          />

          <Route  
            path="/camera"
            exact
            component={() => <Camera />}
          />

          <Route  
            path="/Approved"
            exact
            component={() => <Approved />}
          />

          <Route  
            path="/TryAgain"
            exact
            component={() => <TryAgain />}
          />
      </Switch>
    </div>
  );
}

export default App;
