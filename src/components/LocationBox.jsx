import Button from "./Button";
import "./LocationBox.css"

const LocationBox = ({ place, address, href }) => {
  return (
    <div className="location-box">
      <h2 className="location-title">{place}</h2>
      <p className="location-address">{address}</p>
      <Button href={href} className="button-secondary">
        Buka di Google Map
      </Button>
    </div>
  );
};

export default LocationBox;
