import TopNavbar from "../components/TopNavbar";
import ImageContainer from "../components/ImageContainer";

import "./Family.css";

import placehoderImage from "../assets/images/temp/PLACEHOLDER IMAGE.png";

const Family = () => {
  return (
    <>
      <TopNavbar className="fixed-top"></TopNavbar>

      <div className="board-title-container">
        <h1 className="board-title">KELUARGA</h1>
      </div>
      <div className="section">
        <div className="scrollable-container">
          {/* <div className="overlay" /> */}
          {/* <ImageContainer src={example} title="Mena Tiara" /> */}
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
          <ImageContainer src={placehoderImage} title="UNDEFINED" />
        </div>
      </div>
    </>
  );
};

export default Family;
