import Navbar from "../components/Navbar";
import Background from "../components/Background";

import "./MainMenu.css";
import { Outlet } from "react-router-dom";

const MainMenu = ({ children }) => {
  return (
    <>
      <Background />

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
