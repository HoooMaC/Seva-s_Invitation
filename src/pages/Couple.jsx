import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button";

import brideImage from "../assets/images/couple/temp_bride.png";
import groomImage from "../assets/images/couple/temp_groom.png";

import "./Couple.css";
import Background from "../Background.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPerson,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";

import {
  BrideFirstName,
  BrideLastName,
  GroomFirstName,
} from "../svgs/CoupleNames.jsx";

const Couple = () => {
  const [isGroom, setIsGroom] = useState(false);

  return (
    <>
      <Background>
        <FontAwesomeIcon
          className="couple-bg-icon v1 heart1"
          icon={faHeart}
          size="8x"
          fade
        />
        <FontAwesomeIcon
          className="couple-bg-icon v2 heart2"
          icon={faHeart}
          size="10x"
          fade
        />
        <FontAwesomeIcon
          className="couple-bg-icon v1 heart3"
          icon={faHeart}
          size="4x"
          fade
        />
        <FontAwesomeIcon
          className="couple-bg-icon v2 heart4"
          icon={faHeart}
          size="4x"
          fade
        />
      </Background>

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

      <div className="container">
        <div
          className="col-container"
          style={{ justifyContent: "space-between", minHeight: "100dvh" }}
        >
          {isGroom ? (
            <>
              <img
                src={groomImage}
                className="couple-image"
                alt=""
                key="the-groom-image"
              />
              <GroomFirstName
                width={"320px"}
                height={"120px"}
                className="first-name"
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
              <BrideFirstName
                width={"320px"}
                height={"120px"}
                className="first-name"
              />
              <BrideLastName
                width={"320px"}
                height={"120px"}
                className="last-name"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Couple;
