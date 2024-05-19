import TopNavbar from "../components/TopNavbar";

import "./Family.css";

import placeholderImage from "../assets/images/temp/PLACEHOLDER IMAGE.png";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button.jsx";

const variantIn = {
  initial: {
    y: 0,
    x: 100,
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: 0,
    x: -100,
    scale: 0.7,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const variantOut = {
  initial: {
    y: 0,
    x: -100,
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: 0,
    x: 100,
    scale: 0.7,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const CarouselCard = ({ id, title, subtitle, placeholderImage, animate }) => {
  return (
    <motion.div
      variants={animate ? variantIn : variantOut}
      initial="initial"
      animate="animate"
      exit="exit"
      id={id}
      className="family-card"
    >
      <img src={placeholderImage} alt={title} className="family-image" />
      <h1 className="family-name">{title}</h1>
      <p className="family-subtitle">{subtitle}</p>
    </motion.div>
  );
};

const Family = () => {
  const items = [
    {
      id: "1",
      title: "Jhon",
      subtitle: "Unset",
      image: placeholderImage,
    },
    {
      id: "2",
      title: "Emma",
      subtitle: "Unset",
      image: placeholderImage,
    },
    {
      id: "3",
      title: "Doe",
      subtitle: "Unset",
      image: placeholderImage,
    },
    {
      id: "4",
      title: "Asep",
      subtitle: "Unset",
      image: placeholderImage,
    },
  ];
  const [index, setIndex] = useState(0);
  const [isForward, setIsForward] = useState();
  const handleNext = () => {
    setIsForward(true);
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setIsForward(false);
    setIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <>
      <TopNavbar className="fixed-top"></TopNavbar>

      <div className="board-title-container">
        <h1 className="board-title">KELUARGA</h1>
      </div>

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
            key={items[index].id}
            id={items[index].id}
            title={items[index].title}
            subtitle={items[index].subtitle}
            placeholderImage={items[index].image}
            animate={isForward}
          />
        </AnimatePresence>
      </div>
    </>
  );
};

export default Family;
