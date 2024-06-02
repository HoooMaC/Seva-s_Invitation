import { motion } from "framer-motion";

import { alhamWord, asritaWord, sevaWord } from "./svg_constants.js";

const svgVariant = {
  initial: {
    // opacity: 0,
  },
  animate: {
    // opacity: 1,
  },
};

const transitionProperty = {
  times: [0, 0.1, 0.2, 0.8, 0.9, 1],

  type: "keyframes",
  ease: "easeInOut",
  duration: 6,

  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 0.9,
};

const strokeVariant = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: [0, 1, 1, 1, 1, 0],
    transition: {
      ...transitionProperty,
    },
  },
};

const fillVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0, 1, 1, 0, 0],
    transition: {
      ...transitionProperty,
    },
  },
};

const BrideFirstName = props => {
  return (
    <motion.svg
      variants={svgVariant}
      initial={"initial"}
      animate={"animate"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 325 167"
      fill="none"
      {...props}
    >
      {sevaWord.map(props => (
        <motion.g key={props.id} id={props.id}>
          <motion.path
            variants={strokeVariant}
            d={props.stroke}
            stroke="#CE726F"
            strokeWidth={2}
          />
          <motion.path variants={fillVariant} d={props.fill} fill="#CE726F" />
        </motion.g>
      ))}
    </motion.svg>
  );
};

const BrideLastName = props => {
  return (
    <motion.svg
      variants={svgVariant}
      initial={"initial"}
      animate={"animate"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 325 167"
      fill="none"
      {...props}
    >
      {asritaWord.map(props => (
        <motion.g key={props.id} id={props.id}>
          <motion.path
            variants={strokeVariant}
            d={props.stroke}
            stroke="var(--clr-secondary)"
            strokeWidth={2}
          />
          <motion.path
            variants={fillVariant}
            d={props.fill}
            fill="var(--clr-secondary)"
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};

const GroomFirstName = props => {
  return (
    <motion.svg
      variants={svgVariant}
      initial={"initial"}
      animate={"animate"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 325 167"
      fill="none"
      {...props}
    >
      {alhamWord.map(props => (
        <motion.g key={props.id} id={props.id}>
          <motion.path
            variants={strokeVariant}
            d={props.stroke}
            stroke="var(--clr-secondary)"
            strokeWidth={2}
          />
          <motion.path
            variants={fillVariant}
            d={props.fill}
            fill="var(--clr-secondary)"
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};

export { BrideFirstName, BrideLastName, GroomFirstName };
