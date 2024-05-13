import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";

import * as Icons from "./Icons";
import Button from "./Button";

import "./Navbar.css";
import NavbarIndicatorIcon from "../assets/images/navbar-indicator.svg";

const navItem = [
  {
    key: 1,
    name: "home",
    path: "/home",
    icon: <Icons.HomeIcon />,
  },
  {
    key: 2,
    name: "couple",
    path: "/couple",
    icon: <Icons.HeartIcon />,
  },
  {
    key: 3,
    name: "greetings",
    path: "/greetings",
    icon: <Icons.ClipboardListIcon />,
  },
  {
    key: 4,
    name: "family",
    path: "/family",
    icon: <Icons.PeopleRoofIcon />,
  },
  {
    key: 5,
    name: "date",
    path: "/date",
    icon: <Icons.CalendarDaysIcon />,
  },
];

const Navbar = () => {
  const location = useLocation();
  const buttonRefs = useRef([]);
  const controls = useAnimationControls();
  const isNavItemClick = useRef(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const handleNavItemClick = index => {
    isNavItemClick.current = true;
    const element = buttonRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      controls.start({
        x: `${rect.left - 22}px`,
        transition: {
          duration: 0.3, // Specify the duration in seconds
          ease: "easeInOut", // Specify the easing function
        },
      });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (!isNavItemClick.current) {
      // get the active link
      const index = buttonRefs.current.findIndex(item => {
        return item.getAttribute("href") === location.pathname;
      });
      if (index !== -1) {
        // get the position
        const rect = buttonRefs.current[index].getBoundingClientRect();
        controls.start({
          x: `${rect.left - 24}px`,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
      }
    }
    isNavItemClick.current = false;
  }, [location.pathname, viewportWidth]);

  return (
    <>
      <div className={`navbar-container`}>
        <motion.img
          initial={{ x: 0 }}
          animate={controls}
          style={{ position: "fixed", bottom: "30px", zIndex: -2 }}
          src={NavbarIndicatorIcon}
          alt="indicator"
        />
        <div className="navbar">
          {navItem.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                initial={{
                  y: 0,
                }}
                animate={{
                  y: isActive ? -27 : 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.2, // Specify the duration in seconds
                  ease: "easeInOut", // Specify the easing function
                }}
                className={`nav-item ${isActive ? "active" : ""} `}
                key={item.key}
              >
                <Link
                  className={`${isActive ? "active-link" : ""} `}
                  to={item.path}
                  ref={el => (buttonRefs.current[item.key - 1] = el)}
                  onClick={() => handleNavItemClick(item.key - 1)}
                >
                  {item.icon}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
