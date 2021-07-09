import { Link } from "react-router-dom";
import './id.scss';

function TryAgain(props){
    return (
      <div className="scan">
        <h1>Scan your ID</h1>
        <p>
          Take a picture. It may take a time to validate your personal
          information
        </p>
        <div className="idDiv">
          <div className="rejectedId"></div>
          <div className="rejectedLabel">✖ REJECTED</div>
          <Link to="/camera" onClick={props.reset}>
            <button className="rejectedButton">RETAKE PICTURE</button>
          </Link>
        </div>
      </div>
    );
}

export default TryAgain;