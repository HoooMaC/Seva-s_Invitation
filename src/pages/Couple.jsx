import placeholder from "../assets/images/temp/placeholder1.png";
import imageTitle from "../assets/images/temp/seva-title.png";

import "./Couple.css";
import TopNavbar from "../components/TopNavbar";

const Couple = () => {
  return (
    <>
      <TopNavbar />
      <img src={placeholder} className="couple-image" alt="" />
      <img src={imageTitle} className="couple-title" alt="" />
    </>
  );
};

export default Couple;
