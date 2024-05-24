import Navbar from "../components/Navbar";
import Background from "../components/Background";

import "./MainMenu.css";
import { Outlet } from "react-router-dom";

const MainMenu = ({ children }) => {
  return (
    <>
      {/*<Background />*/}

      <Outlet />

      <Navbar />
    </>
  );
};

export default MainMenu;
