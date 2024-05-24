import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./Background.css";

function Background({ children }) {
  return ReactDOM.createPortal(
    <motion.div
      id="background"
      className="background"
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: { staggerChildren: 0 }, // No delay between the children animations
        },
      }}
    >
      {children}
    </motion.div>,
    document.getElementById("background-root"),
  );
}

export default Background;
