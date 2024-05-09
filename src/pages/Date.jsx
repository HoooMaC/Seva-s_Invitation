import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Button from "../components/Button";
import LocationBox from "../components/LocationBox";
import DateBox from "../components/DateBox";
import TopNavbar from "../components/TopNavbar";

import { HeartIcon } from "../components/Icons";

import CoupleRing from "../assets/icons/couple_ring.svg";

import { useState } from "react";
import "./Date.css";

const Date = () => {
  const [akadPage, setAkadPage] = useState(false);

  const divVariant = {
    left: {
      opacity: 0,
      x: 50,
    },
    mid: {
      opacity: 1,
      x: 0,
    },
    right: {
      opacity: 0,
      x: -50,
    },
  };
  return (
    <>
        <TopNavbar>
        <div className="date-option">
          <Button
            // to="/date/akad"
            onClick={() => setAkadPage(true)}
            className={`top-navbar-button ${akadPage ? "active" : ""}`}
          >
            <HeartIcon />
          </Button>
          <Button
            // to="/date/resepsi"
            onClick={() => setAkadPage(false)}
            className={`top-navbar-button ${!akadPage ? "active" : ""}`}
          >
            <HeartIcon />
          </Button>
        </div>
        </TopNavbar>
      <AnimatePresence>
        <div className="row">
          {akadPage && (
            <motion.div
              className="date-location-wrapper"
              key="first"
              initial="left"
              animate="mid"
              exit="mid"
              variants={divVariant}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <DateBox
                event="Akad Nikah"
                icon={CoupleRing}
                date="01 Januari 2023"
              />
              <LocationBox
                place="Gedung Puri Cendana"
                address="Jl. Baharuddin Yusuf, Tembilahan Kota, Kec. Tembilahan, Kabupaten Indragiri Hilir, Riau 29214"
              />
            </motion.div>
          )}

          {!akadPage && (
            <motion.div
              className="date-location-wrapper"
              key="second"
              initial="right"
              animate="mid"
              exit="left"
              variants={divVariant}
            >
              <DateBox
                event="Resepsi"
                icon={CoupleRing}
                date="01 Januari 2023"
              />
              <LocationBox
                place="Gedung Puri Cendana"
                address="Jl. Baharuddin Yusuf, Tembilahan Kota, Kec. Tembilahan, Kabupaten Indragiri Hilir, Riau 29214"
              />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Date;
