import { Link } from "react-router-dom";
import './id.scss';
function Approved(){
    return(
        <div className="scan">
        <h1>Scan your ID</h1>
        <p>
        Take a picture. It may take a time to validate your personal information
        </p>
        <div className="idDiv">
            <div className="approvedId"></div>
            <div className="approvedLabel">✓ ACCEPTED</div>
        </div>
    </div>
)
}

export default Approved;