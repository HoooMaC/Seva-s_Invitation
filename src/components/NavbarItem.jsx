import { Link } from "react-router-dom";

import "./NavbarItem.css";

const NavbarItem = ({ className, to, children }) => {
    // const classes = `nav-item ${className || ''}`;

  return (
      <Link to={to}>{children}</Link>
  );
};

export default NavbarItem;
