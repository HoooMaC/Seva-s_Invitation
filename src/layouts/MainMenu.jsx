import Navbar from "../components/Navbar";

import "./MainMenu.css";
import { Outlet } from "react-router-dom";

const MainMenu = ({ children }) => {

  return (
    <>
      <div className="container">
        <div className="col-container">
          <Outlet />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default MainMenu;
