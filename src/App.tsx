import {Link, Switch, Route} from "react-router-dom";
import './App.scss';
import Intro from './components/Intro'
import Camera from './components/Camera';
import Approved from './components/Approved';
import TryAgain from './components/TryAgain';



function App() {
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
