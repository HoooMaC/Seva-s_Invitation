import { useLocation } from "react-router-dom";

import "./Background.css";

const Background = ({}) => {
  // const location = useLocation();
  // let classes = "background";
  //
  // switch (location.pathname) {
  //   case "/new-greeting": // cukup putih saja
  //     classes += " white";
  //     break;
  //   case "/letter":
  //     classes += " blur";
  //   case "/":
  //   case "/home":
  //   case "/couple":
  //   case "/family":
  //   case "/date":
  //   case "/greetings":
  //     // classes += " image";
  //     break;
  //   // Bisa ditambahkan case lain sesuai kebutuhan
  //   default:
  //   // Eksekusi kode jika expression tidak cocok dengan nilai yang ada
  // }

  return (
    <>
      <div className="background" />
    </>
  );
};

export default Background;
