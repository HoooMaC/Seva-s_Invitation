import Navbar from "../components/Navbar";
import Button from "../components/Button";

import HomeIcon from "../components/Icons";

import "./MainMenu.css";
import { useLocation } from "react-router-dom";

const MainMenu = ({ children }) => {
  
  const location = useLocation();

  return (
    <>
      <div className="container border-debug">
        <div className="col-container">
          <Button to={`${location.pathname === '/home' ? '/letter' : '/home'}`} className='top-left-corner'><HomeIcon/></Button>          
        </div>
      </div>
      {children}
      <Navbar />
    </>
  );
};

export default MainMenu;
