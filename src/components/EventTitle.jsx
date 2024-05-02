import "./EventTitle.css";
const EventTitle = ({ children }) => {
  return (
    <div className="event-title-wrapper">
      <div className="decorated-event-title">
        <div className="left-side">
          <div className="line top left" />
          <div className="line bottom left" />
        </div>
        <h2 className="event-title">{children}</h2>
        <div className="right-side">
          <div className="line top right" />
          <div className="line bottom right" />
        </div>
      </div>
    </div>
  );
};

export default EventTitle;
