import "./NotAttend.css";
import TopNavbar from "../components/TopNavbar.jsx";
import {
  faFaceLaughWink,
  faFaceSadTear,
  faFilePen,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button.jsx";
import Background from "../Background.jsx";

const NotAttend = () => {
  return (
    <>
      <Background></Background>
      <div className="container">
        <div className="col-container">
          <TopNavbar className="fixed-top" />

          <div className="not-attend-content">
            <FontAwesomeIcon
              icon={faFaceSadTear}
              size="6x"
              color="var(--clr-tertiary)"
            />

            <div className="not-attend-message">
              <h1 className={"not-attend-header"}>Yaah sayang banget</h1>
              <h2 className={"not-attend-subheader"}>
                Padahal aku nungguin lo, sayang banget kalau ga ada kamu.
              </h2>
              <p>Tapi gapapa, setidaknya kamu bisa tulis ucapan buat</p>
              <Button className={"not-attend-button"} to="/new-greeting">
                <FontAwesomeIcon icon={faFilePen} size={"sm"} />
                Buat Pesan
              </Button>
              <p>Sama kamu juga bisa kirim hadiah buat kenang-kenangan</p>
              <Button className={"not-attend-button"} to="/send-gift">
                <FontAwesomeIcon icon={faGift} size={"sm"} />
                Kirim Hadiah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotAttend;
