import "./id.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LampIcon } from "../images/lampLogo.svg";
import { ReactComponent as AcceptedIcon } from "../images/acceptedLogo.svg";

function Camera(props) {
  let idCard = (
    <div>
      <div className="objective" onClick={props.scan}></div>{" "}
      <p>
        <LampIcon /> Room lighting is too low
      </p>
    </div>
  );

  if (props.scanner === "Approved") {
    idCard = (
      <div>
        <div className="objective accepted">
          <Link to="/Approved">
            <div className="Id"></div>
          </Link>
        </div>
        <p>
          <AcceptedIcon /> Picture taken!
        </p>
      </div>
    );
  } else if (props.scanner === "Too Much Glare") {
    idCard = (
      <div>
        <div className="objective rejected">
          <Link to="/TryAgain">
            <div className="Id"></div>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="cameraBg">
      <div className="cameraContainer">
        <div className="text">
          <h1>Take picture</h1>
          <p>
            Fit your ID card inside the frame.
            <br />
            The picture will be taken automatically.
          </p>
        </div>
        <div className="cam">{idCard}</div>
        <Link to="/">CANCEL</Link>
      </div>
    </div>
  );
}

export default Camera;
