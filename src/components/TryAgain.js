import { Link } from "react-router-dom";
import './id.scss';

function TryAgain(){
    return(
<div className="scan">
        <h1>Scan your ID</h1>
        <p>
        Take a picture. It may take a time to validate your personal information
        </p>
        <div className="idDiv">
            <div className="rejectedId"></div>
            <div className="rejectedLabel">✖ REJECTED</div>
            <Link to="/camera"><button className="rejectedButton">RETAKE PICTURE</button></Link>
        </div>
    </div>
)
}

export default TryAgain;