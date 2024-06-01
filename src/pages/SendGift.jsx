import "./SendGift.css";
import Background from "../Background.jsx";
import TopNavbar from "../components/TopNavbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSadTear,
  faFilePen,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button.jsx";

const SendGift = () => {
  return (
    <>
      <Background></Background>
      <div className="container">
        <div className="col-container">
          <TopNavbar className="fixed-top" />
        </div>
      </div>
    </>
  );
};
export default SendGift;
