import "./Family.css";
import example from "../assets/images/temp/example_image.png"

const Family = () => {
  return (
    <>
      <div className="image-container">
        <img src={example} alt="" className="family-image" />
      </div>
      <div className="family-title-container"><h2 className="family-title">Mena Tiara</h2></div>
    </>
  );
};

export default Family;
