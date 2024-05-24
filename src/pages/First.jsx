import Button from "../components/Button";
import Background from "../Background.jsx";

import logo from "../assets/images/S_A.png";

import "./First.css";

const First = () => {
  return (
    <>
      <Background />
      <div className="container">
        <div className="col-container welcome-content">
          <img className="title" src={logo} alt="seva dan alham" />
          <Button className="button-liquid" to="/letter">
            Buka Undangan
          </Button>
        </div>
      </div>
    </>
  );
};

export default First;
