import axios from "axios";
import { useState, useRef, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { AnimatePresence, motion } from "framer-motion";

import { PlusIcon } from "../components/Icons";
import Button from "../components/Button";
import TopNavbar from "../components/TopNavbar";
import GreetingCard from "../components/GreetingCard";

import "./Greetings.css";

const Greetings = () => {
  const [data, setData] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/greetings`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TopNavbar className="fixed-top"></TopNavbar>
      <div className="board-title-container">
        <h1 className="board-title">PAPAN PESAN</h1>
      </div>

      {isLoading ? (
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
            {data.map(({ id, attributes }, index) => (
              <GreetingCard
                key={id}
                name={attributes.name}
                relation={attributes.relation}
              >
                {attributes.message}
              </GreetingCard>
            ))}

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
    </>
  );
};

export default Greetings;
