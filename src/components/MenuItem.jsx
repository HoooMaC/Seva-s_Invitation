import { Link, useLocation } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ to, children }) => {
  const location = useLocation();
  return (
    <Link
      className={`menu-item ${to === location.pathname ? "active" : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
