import {motion} from 'framer-motion'

import Button from "../components/Button";
import Navbar from "../components/Navbar.jsx";
import "./Letter.css";
import {
  HomeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../components/Icons.jsx";

import letterPaperImg from "../assets/images/letter-paper.png";
import lettercontent from "../assets/images/letter-content.png";

const Letter = () => {
  return (
    <div className="container border-debug">
      <div className="col-container">
        <Button className={"top-left-corner"} to="/">
          <ChevronLeftIcon />
        </Button>

        {/* content here */}

        <div className="letter border-debug">
          <img className="letter-bg" src={letterPaperImg} alt="" />
          <motion.img
            className="letter-content"
            src={lettercontent}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* content here */}

        <Button className={"bottom-right-corner"} to="/home">
          <ChevronRightIcon />
        </Button>
      </div>
      {/* <Navbar></Navbar> */}
    </div>
  );
};

export default Letter;
