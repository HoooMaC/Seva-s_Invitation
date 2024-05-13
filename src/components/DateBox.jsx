import EventTitle from "../components/EventTitle";
import CountDown from "../components/CountDown";
import CoupleRing from "../assets/icons/couple_ring.png";
import "./DateBox.css";

const DateBox = ({ event, icon, date }) => {
  return (
    <div className="date-box">
      <img src={icon} alt="" />
      <div className="event-date-wrapper">
        <EventTitle>{event}</EventTitle>
        <h3 className="event-date">{date}</h3>
      </div>
      <CountDown>{/* nanti perlu ditambahkan tanggal disini  */}</CountDown>
    </div>
  );
};

export default DateBox;
