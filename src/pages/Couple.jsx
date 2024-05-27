import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button";
import { HeartIcon } from "../components/Icons";

import brideImage from "../assets/images/couple/temp_bride.png";
import brideTitle from "../assets/images/couple/bride_name.png";

import groomImage from "../assets/images/couple/temp_groom.png";
import groomTitle from "../assets/images/couple/groom_name.png";

import "./Couple.css";
import Background from "../Background.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPerson,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";

const Couple = () => {
  const [isGroom, setIsGroom] = useState(true);

  return (
    <>
      <div className="container">
        <div
          className="col-container"
          style={{ justifyContent: "space-between" }}
        >
          <TopNavbar>
            <div className="date-option">
              <Button
                // to="/date/akad"
                onClick={() => setIsGroom(true)}
                className={`top-navbar-button ${isGroom ? "active" : ""}`}
              >
                <FontAwesomeIcon
                  className="transition"
                  icon={faPerson}
                  size={isGroom ? "2x" : "xl"}
                />
              </Button>
              <Button
                // to="/date/resepsi"
                onClick={() => setIsGroom(false)}
                className={`top-navbar-button ${!isGroom ? "active" : ""}`}
              >
                <FontAwesomeIcon
                  icon={faPersonDress}
                  size={!isGroom ? "2x" : "xl"}
                />
              </Button>
            </div>
          </TopNavbar>

          {isGroom ? (
            <>
              <img
                src={groomImage}
                className="couple-image"
                alt=""
                key="the-groom-image"
              />
              <img
                src={groomTitle}
                className="couple-title"
                alt=""
                key="groom-title"
              />
            </>
          ) : (
            <>
              <img
                src={brideImage}
                className="couple-image"
                alt=""
                key="the-bride-image"
              />
              <img
                src={brideTitle}
                className="couple-title"
                alt=""
                key="the-bridge-title"
              />
            </>
          )}
        </div>
      </div>
      <div className="couple-overlay" style={{ zIndex: 2, left: 0 }}></div>
    </>
  );
};

export default Couple;
