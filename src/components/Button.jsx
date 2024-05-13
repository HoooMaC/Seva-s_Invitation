import { NavLink } from "react-router-dom";

import "./Button.css";

const Button = ({ className, to, onClick, children }) => {
  const classes = `button ${className || ""}`;

  const renderLink = () => {
    return <NavLink className={classes} to={to}>{children}</NavLink>;
  };

  const renderButton = () => {
    return <button className={classes} onClick={onClick}>{children}</button>;
  };

  return (to ? renderLink() : renderButton());
};

export default Button;