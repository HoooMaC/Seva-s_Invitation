import Navbar from "../components/Navbar";
import Button from "../components/Button";

import HomeIcon, { ChevronLeftIcon } from "../components/Icons";

import "./MainMenu.css";
import { Outlet, useLocation } from "react-router-dom";

const MainMenu = ({ children }) => {
  
  const location = useLocation();

  return (
    <>
      <div className="container border-debug">
        <div className="col-container">
          <Button to={`${location.pathname === '/home' ? '/letter' : '/home'}`} className='back-button'><ChevronLeftIcon/></Button>          
          <Outlet />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default MainMenu;
