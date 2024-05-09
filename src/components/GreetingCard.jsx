import "./GreetingCard.css"

const GreetingCard = ({ name, relation, icon, children}) => {
  return (
    <div className="greeting-card">
      <div className="greeting-card-section header">
        <div className="greeting-card-profile">
            {/* Profile image if exist */}
            { icon && icon }
        </div>
        <div className="greeting-card-id">
            <h3 className="greeting-card-writter">{name}</h3>
            <h4 className="greeting-card-writter-relation">{relation}</h4>
        </div>
      </div>
      <div className="greeting-card-section body">
        <p className="greeting-card-content">
          {/* This will be replaced with children */}
          {children}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sapiente error esse quam. Excepturi quibusdam nisi sit doloribus quos
          iste labore a et mollitia, veritatis laudantium, consequatur quaerat
          est veniam nemo in eligendi, maxime ducimus eius asperiores? Itaque,
          ad alias quo, optio ipsam laudantium delectus non veritatis, cum
          facere quos. */}
        </p>
      </div>
      <div className="greeting-card-section footer">
        <div className="line-decoration top"></div>
        <div className="line-decoration bottom"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
