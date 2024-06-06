import "./GreetingCard.css";

const GreetingCard = ({ name, relation, icon, children }) => {
  return (
    <>
      <div className="greeting-card-section header">
        <div className="greeting-card-profile">
          {/*Profile image if exist*/}
          {icon && (
            <img className="greeting-card-writter-icon" src={icon} alt={name} />
          )}
        </div>
        <div className="greeting-card-id">
          <h3 className="greeting-card-writter">{name}</h3>
          <h4 className="greeting-card-writter-relation">{relation}</h4>
        </div>
      </div>
      <div className="greeting-card-section body">
        <p className="greeting-card-content">{children}</p>
      </div>
      <div className="greeting-card-section footer">
        <div className="line-decoration top"></div>
        <div className="line-decoration bottom"></div>
      </div>
    </>
  );
};

export default GreetingCard;
