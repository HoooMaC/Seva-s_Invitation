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
    name: "family",
    path: "/family",
    icon: <Icons.PeopleRoofIcon />,
  },
  {
    key: 4,
    name: "date",
    path: "/date",
    icon: <Icons.CalendarDaysIcon />,
  }
];

const Navbar = () => {
  const location = useLocation();
  const buttonRefs = useRef([]);
  const controls = useAnimationControls();
  const isNavItemClick = useRef(false);

  const handleNavItemClick = (index) => {
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
    if (!isNavItemClick.current) {
      // get the active link
      const index = buttonRefs.current.findIndex((item) => {
        return item.getAttribute("href") === location.pathname;
      });
      // check if the active link is available
      console.log(index);
      if (index !== -1) {
        // get the position
        const rect = buttonRefs.current[index].getBoundingClientRect();
        // start the animation
        controls.start({
          x: `${rect.left - 22}px`,
          transition: {
            duration: 0.3, // Specify the duration in seconds
            ease: "easeInOut", // Specify the easing function
          },
        });
      }
    }
    isNavItemClick.current = false;
  }, [location.pathname]);

  return (
    <>
      <div
        className={`navbar-container fixed-bottom`} //add class left is current navbar is left
      >
        <motion.img
          initial={{ x: 0 }}
          animate={controls}
          style={{ position: "fixed", bottom: "58px", zIndex: -2 }}
          src={NavbarIndicatorIcon}
          alt="indicator"
        />
        <div className="navbar">
          {navItem.map((item) => {
            const isActive = location.pathname === item.path;
            if (item.key >= 5) return null;
            return (
              <motion.div
                initial={{
                  y: 0,
                }}
                animate={{
                  y: isActive ? -40 : 0,
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
                  ref={(el) => (buttonRefs.current[item.key - 1] = el)}
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
