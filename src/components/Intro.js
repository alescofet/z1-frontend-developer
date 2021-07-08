import './Intro.scss';
import { ReactComponent as IdSample } from "../images/IdSample.svg";
import { Link } from 'react-router-dom';

function Intro(){
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
)
}

export default Intro;