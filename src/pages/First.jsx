import Button from "../components/Button";
import Background from "../Background.jsx";

import logo from "../assets/images/S_A.png";

import "./First.css";
import { motion } from "framer-motion";

import flowerTop from "../assets/images/Group 109.svg";
import flowerBot from "../assets/images/Group 108.svg";

const First = () => {
  return (
    <>
      <Background>
        <div className="center-wrapper">
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 2,
            }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="first-circle-effect"
          />
        </div>
        <motion.img
          initial={{ left: "-100%", bottom: "0%", scale: 0.5, opacity: 0 }}
          animate={{ left: "-25%", bottom: "10%", scale: 2, opacity: 0.7 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          style={{ position: "absolute" }}
          src={flowerBot}
          alt=""
        />
        <motion.img
          initial={{ right: "-50%", top: "0", scale: 0.5, opacity: 0 }}
          animate={{ right: "-25%", top: "10%", scale: 2, opacity: 0.7 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          style={{ position: "absolute" }}
          src={flowerTop}
          alt=""
        />
      </Background>
      <div className="container">
        <img className="title" src={logo} alt="seva dan alham" />
        <Button className="button-liquid first-button" to="/letter">
          Buka Undangan
        </Button>
      </div>
    </>
  );
};

export default First;
