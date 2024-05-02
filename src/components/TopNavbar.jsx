import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MenuItem from "./MenuItem";
import { ChevronLeftIcon, BarsIcon } from "./Icons";
import Button from "./Button";

import "./TopNavbar.css";

const TopNavbar = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="top-navbar">
      <Button to="/letter" className="back-button">
        <ChevronLeftIcon />
      </Button>

      {children}

      <Button
        className="menu-button"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <BarsIcon />
      </Button>
      <AnimatePresence>
        {menuOpened ? (
          <motion.div
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="menu-container">
              <div className="menu-box">
                <div className="menu-section">
                  <MenuItem to="/home">Home</MenuItem>
                  <MenuItem to="/couple">Pengantin</MenuItem>
                  <MenuItem to="/family">Keluarga</MenuItem>
                  <MenuItem to="/date">Tanggal & Lokasi</MenuItem>
                  <MenuItem to="/gallery">Galeri</MenuItem>
                  <MenuItem to="/greeting-board">Papan Ucapan</MenuItem>
                </div>
                <hr className="menu-separator" />
                <div className="menu-section">
                  <MenuItem to="/cant-attend">Tidak bisa hadir?</MenuItem>
                </div>
                <hr className="menu-separator" />
                <div className="menu-section">
                  <MenuItem to="/info">Info</MenuItem>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default TopNavbar;
