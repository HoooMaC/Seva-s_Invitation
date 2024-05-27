import { motion, AnimatePresence } from "framer-motion";

import Button from "../components/Button";
import LocationBox from "../components/LocationBox";
import DateBox from "../components/DateBox";
import TopNavbar from "../components/TopNavbar";

import { HeartIcon } from "../components/Icons";

import CoupleRing from "../assets/icons/couple_ring.svg";

import { useState } from "react";
import "./Date.css";
import Background from "../Background.jsx";

const Date = () => {
  const [akadPage, setAkadPage] = useState(false);

  const divVariant = {
    mid: {
      opacity: 1,
      x: 0,
      scale: 0.9,
    },
  };
  return (
    <>
      <Background>
        <motion.div
          initial={{ right: "-50%", top: "-10%", scale: 1, opacity: 0 }}
          animate={{
            right: "-20%",
            top: 0,
            opacity: 0.7,
            scale: 2,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
        <motion.div
          initial={{ left: "-50%", bottom: 0, scale: 1, opacity: 0 }}
          animate={{
            left: "-20%",
            bottom: 0,
            scale: 2,
            opacity: 0.7,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
        <motion.h1
          initial={{ left: "0%", top: "10%", scale: 3, opacity: 0 }}
          animate={{
            left: "10%",
            top: "10%",
            scale: 3,
            opacity: 1,
            transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
          }}
          className="background-typo"
        >
          S
        </motion.h1>
        <motion.h1
          initial={{ right: "0%", bottom: "10%", scale: 3, opacity: 0 }}
          animate={{
            right: "10%",
            bottom: "10%",
            scale: 3,
            opacity: 1,
            transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
          }}
          className="background-typo"
        >
          A
        </motion.h1>
      </Background>
      <div className="container">
        <div
          className="col-container"
          style={{ justifyContent: "space-between" }}
        >
          <TopNavbar>
            <div className="date-option">
              <Button
                onClick={() => setAkadPage(true)}
                className={`top-navbar-button ${akadPage ? "active" : ""}`}
              >
                <HeartIcon />
              </Button>
              <Button
                onClick={() => setAkadPage(false)}
                className={`top-navbar-button ${!akadPage ? "active" : ""}`}
              >
                <HeartIcon />
              </Button>
            </div>
          </TopNavbar>

          <AnimatePresence mode="wait">
            {akadPage && (
              <motion.div
                className="date-location-wrapper"
                key="first"
                variants={divVariant}
                initial={{
                  opacity: 0,
                  x: 50,
                  scale: 0.8,
                }}
                animate="mid"
                exit={{
                  opacity: 0,
                  x: 50,
                  scale: 0.8,
                }}
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
                variants={divVariant}
                initial={{
                  opacity: 0,
                  x: -50,
                  scale: 0.8,
                }}
                animate="mid"
                exit={{
                  opacity: 0,
                  x: -50,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
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
          </AnimatePresence>

          <div
            className="dummy-box"
            style={{ width: "100%", height: "40px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Date;
