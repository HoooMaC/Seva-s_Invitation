import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MenuItem from './MenuItem';
import { HomeIcon, ChevronLeftIcon, BarsIcon } from './Icons';
import Button from './Button';

import './TopNavbar.css';
import { useLocation } from 'react-router-dom';
import Modal from '../Modal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = ({ className, children }) => {
  const location = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <div className={`top-navbar ${className ? className : ''}`}>
        <Button
          to={location.pathname !== '/home' ? '/home' : '/letter'}
          className="back-button"
        >
          {/* <ChevronLeftIcon /> */}
          {location.pathname !== '/home' ? <HomeIcon /> : <ChevronLeftIcon />}
        </Button>

        {children}

        <Button className="menu-button" onClick={() => setMenuOpened(true)}>
          <BarsIcon />
        </Button>
      </div>
      <AnimatePresence>
        {menuOpened ? (
          <Modal>
            <div className="menu-close-wrapper">
              <Button
                className="menu-close-button"
                onClick={() => setMenuOpened(false)}
              >
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              </Button>
            </div>
            <motion.div
              className="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className="menu-box">
                <div className="menu-section">
                  <MenuItem to="/home">Home</MenuItem>
                  <MenuItem to="/couple">Pengantin</MenuItem>
                  <MenuItem to="/family">Keluarga</MenuItem>
                  <MenuItem to="/date">Tanggal & Lokasi</MenuItem>
                  {/*<MenuItem to="/gallery">Galeri</MenuItem>*/}
                  <MenuItem to="/greetings">Papan Ucapan</MenuItem>
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
            </motion.div>
          </Modal>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default TopNavbar;
