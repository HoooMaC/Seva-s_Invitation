import axios from "axios";
import { useState, useRef, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { AnimatePresence, motion } from "framer-motion";

import { PlusIcon } from "../components/Icons";
import Button from "../components/Button";
import TopNavbar from "../components/TopNavbar";
import GreetingCard from "../components/GreetingCard";

import "./Greetings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Background from "../Background.jsx";

const Greetings = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // TODO Change with react query
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/greetings`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const RenderData = () => {
    // Periksa apakah data.data.map valid
    if (data.data && Array.isArray(data.data)) {
      return data.data.map(({ id, attributes }, index) => (
        <GreetingCard
          key={id}
          name={attributes.name}
          relation={attributes.relation}
          icon={attributes.icon}
        >
          {attributes.message}
        </GreetingCard>
      ));
    }

    // Periksa apakah data.map valid
    if (data && Array.isArray(data)) {
      return data.map(({ id, attributes }, index) => (
        <GreetingCard
          key={id}
          name={attributes.name}
          relation={attributes.relation}
          icon={attributes.icon}
        >
          {attributes.message}
        </GreetingCard>
      ));
    }

    // Jika kedua properti tidak valid, kembalikan null atau tampilkan pesan kesalahan
    return null;
  };
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

      <div className="container">
        <div className="col-container">
          <h1 className="board-title">PAPAN PESAN</h1>
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
          ) : (
            <div className="section">
              <div className="scrollable-container">
                <RenderData />
                <div style={{ width: "100%", minHeight: "10vh" }}></div>
              </div>
              {/* Need to check if the user hasn't write any greeting letter yet */}
              <Button
                className="circle-button new-greeting-button"
                to="/new-greeting"
              >
                <PlusIcon />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Greetings;
