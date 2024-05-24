import { motion } from "framer-motion";
import TopNavbar from "../components/TopNavbar";

import Background from "../Background.jsx";

import "./Home.css";

import title from "../assets/images/Seva_Alham.png";

const Home = () => {
  return (
    <>
      <Background>
        <motion.div
          initial={{ right: "-50%", top: "-10%", scale: 1, opacity: 0 }}
          animate={{
            right: "-20%",
            top: 0,
            opacity: 1,
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
            opacity: 1,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
      </Background>

      <div className="container">
        <div className="col-container">
          <TopNavbar />
          <img className="title" src={title} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
