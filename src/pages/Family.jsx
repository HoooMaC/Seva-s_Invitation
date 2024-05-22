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
          scale: 1,
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
      <TopNavbar className="fixed-top"></TopNavbar>

      {/*<div className="board-title-container">*/}
      {/*  <h1 className="board-title">KELUARGA</h1>*/}
      {/*</div>*/}

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
    </>
  );
};

export default Family;
