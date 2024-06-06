import axios from "axios";
import { useState, useRef, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";

import { PlusIcon } from "../components/Icons";
import Button from "../components/Button";
import TopNavbar from "../components/TopNavbar";
import GreetingCard from "../components/GreetingCard";

import "./Greetings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Background from "../Background.jsx";
import { FullpageSection } from "../components/section.jsx";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
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

const Greetings = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  function getData() {
    if (data.data && Array.isArray(data.data)) return data.data;
    else if (data && Array.isArray(data)) return data;
    console.log("something went wrong");
    return null;
  }

  // TODO Change with react query
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/greetings`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
      <TopNavbar />

      <FullpageSection id={"greetings"} className={"max-100"}>
        <h1
          className="board-title"
          style={{ position: "fixed", width: "var(--container-width)" }}
        >
          PAPAN PESAN
        </h1>
        {error ? (
          <div className="error-box">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              color="#ff224a"
              size="6x"
            />
            <h3 className="error-header">Something went wrong</h3>
            <p>Please try again later</p>
          </div>
        ) : isLoading ? (
          <motion.div
            className="loading-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BeatLoader
              color="#D6A09E"
              loading={isLoading}
              // cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </motion.div>
        ) : null}

        <div className="greetings-container">
          {!isLoading && (
            <>
              <motion.div
                variants={container}
                initial={"hidden"}
                animate={"visible"}
                className="scrollable-container"
              >
                {getData().map(({ attributes }, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      className="greeting-card"
                    >
                      <GreetingCard
                        icon={attributes.icon}
                        name={attributes.name}
                        relation={attributes.relation}
                      >
                        {attributes.message}
                      </GreetingCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </>
          )}
        </div>
        {/* Need to check if the user hasn't write any greeting letter yet */}
        <Button
          className="circle-button new-greeting-button"
          to="/new-greeting"
        >
          <PlusIcon />
        </Button>
      </FullpageSection>
    </>
  );
};

export default Greetings;
