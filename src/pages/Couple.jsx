import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button";
import { HeartIcon } from "../components/Icons";

import placeholder from "../assets/images/temp/placeholder1.png";
import imageTitle from "../assets/images/temp/seva-title.png";

import "./Couple.css";

const Couple = () => {
  const [groom, setGroom] = useState(true);

  return (
    <>
      <TopNavbar>
        <div className="date-option">
          <Button
            // to="/date/akad"
            onClick={() => setGroom(true)}
            className={`top-navbar-button ${groom ? "active" : ""}`}
          >
            <HeartIcon />
          </Button>
          <Button
            // to="/date/resepsi"
            onClick={() => setGroom(false)}
            className={`top-navbar-button ${!groom ? "active" : ""}`}
          >
            <HeartIcon />
          </Button>
        </div>
      </TopNavbar>

      {groom ? (
        <>
          <img
            src={placeholder}
            className="couple-image"
            alt=""
            key="groom-image"
          />
          <img
            src={imageTitle}
            className="couple-title"
            alt=""
            key="groom-title"
          />
        </>
      ) : (
        <>
          <img
            src={placeholder}
            className="couple-image"
            alt=""
            key="the-bridge-image"
          />
          <img
            src={imageTitle}
            className="couple-title"
            alt=""
            key="the-bridge-title"
          />
        </>
      )}
    </>
  );
};

export default Couple;
