import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button.jsx";

import families from "../constants/familes.js";

import "./Family.css";
import Background from "../Background.jsx";

const CarouselCard = ({ id, title, subtitle, image, animationDirection }) => {
  return (
    <motion.div
      variants={{
        initial: {
          x: animationDirection === "next" ? 100 : -100,
          scale: 0.7,
          opacity: 0,
        },
        animate: {
          x: 0,
          scale: 0.8,
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        },
        exit: {
          x: animationDirection === "next" ? -100 : 100,
          scale: 0.7,
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      id={id}
      className="family-card"
    >
      <div className="image-wrapper">
        <motion.img
          onHoverStart={() => console.log("hover child")}
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: {
              type: "tween",
              duration: 0.2,
              // ease: "easeInOut",
            },
          }}
          src={image}
          alt={title}
          className="family-image"
        />
      </div>
      <h1 className="family-name">{title}</h1>
      <p className="family-subtitle">{subtitle}</p>
    </motion.div>
  );
};

const Family = () => {
  const [sliderState, setSliderState] = useState({
    currentIndex: 0,
    direction: "next",
  });

  const handleNext = () => {
    setSliderState(prevState => ({
      ...prevState,
      direction: "next",
      currentIndex: (prevState.currentIndex + 1) % families.length,
    }));
  };

  const handlePrev = () => {
    setSliderState(prevState => ({
      ...prevState,
      direction: "prev",
      currentIndex:
        (prevState.currentIndex - 1 + families.length) % families.length,
    }));
  };

  return (
    <>
      <Background>
        <motion.div
          initial={{ left: "-50%", top: "-10%", scale: 1, opacity: 0 }}
          animate={{
            left: "-20%",
            top: 0,
            opacity: 1,
            scale: 2,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
        <motion.div
          initial={{ right: "-50%", bottom: 0, scale: 1, opacity: 0 }}
          animate={{
            right: "-20%",
            bottom: 0,
            scale: 2,
            opacity: 1,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
      </Background>
      <TopNavbar />
      <div className="container">
        <div className="col-container">
          <h1 className="board-title">KELUARGA</h1>

          <div className="family-section">
            <div className="carousel-navigator-container">
              <Button className="circle-button" onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button className="circle-button" onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
            <AnimatePresence initial={false} mode={"wait"}>
              <CarouselCard
                key={families[sliderState.currentIndex].id}
                id={families[sliderState.currentIndex].id}
                title={families[sliderState.currentIndex].title}
                subtitle={families[sliderState.currentIndex].subtitle}
                image={families[sliderState.currentIndex].image}
                animationDirection={sliderState.direction}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Family;
