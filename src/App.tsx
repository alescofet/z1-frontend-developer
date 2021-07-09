import {Link, Switch, Route} from "react-router-dom";
import './App.scss';
import Intro from './components/Intro'
import Camera from './components/Camera';
import Approved from './components/Approved';
import TryAgain from './components/TryAgain';
import axios from "axios";
import { useState } from "react";


function App() {
  const [scanner,setScanner] = useState(undefined)
  const scan = (()=>{
    axios
    .post('https://front-exercise.z1.digital/evaluations')
    .then((result)=>{
      setScanner(result.data.summary.outcome)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

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
            component={() => <Intro scanner={scanner} reset={()=>setScanner(undefined)}/>}
          />

          <Route  
            path="/camera"
            exact
            component={() => <Camera  scan={()=>scan()} scanner={scanner}/>}
          />

          <Route  
            path="/Approved"
            exact
            component={() => <Approved />}
          />

          <Route  
            path="/TryAgain"
            exact
            component={() => <TryAgain reset={()=>setScanner(undefined)} />}
          />

      </Switch>
    </div>
  );
}

export default App;
