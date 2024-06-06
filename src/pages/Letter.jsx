import { AnimatePresence, motion } from "framer-motion";

import Background from "../Background.jsx";
import Button from "../components/Button";
import { FullpageSection } from "../components/section.jsx";
import "./Letter.css";

import bismillah from "../assets/images/bismillah.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const paragraphVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const getLetter = text => {
  return text.trim().split("");
};

const AnimatedText = ({ delay, className, children }) => {
  return (
    <motion.p
      transition={
        delay
          ? {
              staggerChildren: 0.02,
              delay: delay * 0.5,
            }
          : { staggerChildren: 0.02 }
      }
      className={className}
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
      style={{ marginTop: "8px", maxWidth: "100%" }}
    >
      {getLetter(children).map((letter, index) => (
        <motion.span variants={paragraphVariants} key={index}>
          {letter}
        </motion.span>
      ))}
      {/*{children}*/}
    </motion.p>
  );
};

const Letter = () => {
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

      <FullpageSection id={"letter"} className={"letter-section-layout"}>
        <Button className={""} to="/">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        {/* content here */}
        <motion.div
          className="letter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, staggerChildren: 1 }}
        >
          <motion.img
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            src={bismillah}
            className="letter-bismillah"
            alt="bismillahirrahmanirahim"
          />
          <AnimatedText className="letter-greeting" delay={1}>
            Assalamu’alaikum wr wb
          </AnimatedText>
          <AnimatedText className="letter-verse" delay={2}>
            "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
            mengingat (kebesaran Allah)."
          </AnimatedText>
          <AnimatedText className="letter-paragraph" delay={3}>
            Segala puji bagi Allah yang telah menciptakan manusia berpasangan
            untuk saling melengkapi dan membantu satu sama lain dalam kebaikan.
            Shalawat serta salam semoga selalu tercurah kepada junjungan kita
            Nabi Muhammad Shallallahu 'Alaihi Wasallam yang telah mencontohkan
            kepada kita bagaimana sebuah pernikahan yang berkat dan bahagia.
          </AnimatedText>
          <AnimatedText className="letter-paragraph" delay={4}>
            Dengan penuh rasa syukur dan kebahagiaan, kami, Alham dan Seva,
            bermaksud untuk menyatukan tali kasih dalam ikatan pernikahan yang
            di ridhai oleh Allah SWT. Oleh karena itu, dengan rendah hati kami
            mengundang Anda untuk turut berbagi kebahagiaan dalam pernikahan
            kami
          </AnimatedText>
          <AnimatedText className="letter-paragraph" delay={5}>
            Teriring doa semoga Allah SWT senantiasa memberkahi langkah-langkah
            kita semua, memberikan keberkahan dalam setiap langkah hidup, serta
            menjaga dan merahmati hubungan yang kita bina.
          </AnimatedText>
          <AnimatedText className="letter-close-greeting" delay={6}>
            Wassalamu’alaikum wr wb
          </AnimatedText>
          <AnimatedText className="letter-closing" delay={7}>
            Yang Berbahagia
          </AnimatedText>
          <AnimatedText className="letter-couple" delay={7}>
            Alham & Seva
          </AnimatedText>
        </motion.div>
        <Button className={"bottom-right-corner"} to="/home">
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
      </FullpageSection>
    </>
  );
};

export default Letter;
