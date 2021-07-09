import './Intro.scss';
import { ReactComponent as IdSample } from "../images/IdSample.svg";
import { Link } from 'react-router-dom';
import Approved from './Approved';
import TryAgain from './TryAgain';


function Intro(props){
if(props.scanner === undefined){
return(
    <div className="intro">
        <h1>Scan your ID</h1>
        <p>
        Take a picture. It may take a time to validate your personal information
        </p>
        <div className="idDiv">
            <IdSample />
            <Link to="/camera"><button>TAKE PICTURE</button></Link>
        </div>
    </div>
)} else{
    if(props.scanner === "Approved"){
        return(<Approved/>)
    } else{
        return(<TryAgain reset={props.reset} />)
    }
}
}

export default Intro;