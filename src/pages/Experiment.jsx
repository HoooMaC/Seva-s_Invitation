import { motion, AnimatePresence } from "framer-motion";

import "./Experiment.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function generateRandomList(length, max) {
  let randomList = [];
  for (let i = 0; i < length; i++) {
    randomList.push(Math.floor(Math.random() * max));
  }
  return randomList;
}

const Experiment = () => {
  const myRandomList = generateRandomList(10, 100);
  return (
    <motion.div
      className="parent-box"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {myRandomList.map(() => {
        return (
          <motion.div variants={item} className="greeting-card">
            {/*  -------------------------------------- */}
            <div className="greeting-card-section header">
              <div className="greeting-card-profile">
                {/* Profile image if exist */}
                {/*{icon && (*/}
                {/*  <img className="greeting-card-writter-icon" src={icon}*/}
                {/*       alt={name} />*/}
                {/*)}*/}
              </div>
              <div className="greeting-card-id">
                <h3 className="greeting-card-writter">Dummy Name</h3>
                <h4 className="greeting-card-writter-relation">relation</h4>
              </div>
            </div>
            <div className="greeting-card-section body">
              <p className="greeting-card-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                at est hic maiores, perspiciatis rem tenetur. Enim
                exercitationem perferendis rem.
              </p>
            </div>
            <div className="greeting-card-section footer">
              <div className="line-decoration top"></div>
              <div className="line-decoration bottom"></div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Experiment;
