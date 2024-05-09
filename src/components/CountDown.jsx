import "./CountDown.css"

const CountDown = () => {
  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-number">01</div>
        <p className="countdown-unit">Bulan</p>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">01</div>
        <p className="countdown-unit">Hari</p>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">01</div>
        <p className="countdown-unit">Jam</p>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">01</div>
        <p className="countdown-unit">Menit</p>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">01</div>
        <p className="countdown-unit">Detik</p>
      </div>
    </div>
  );
};

export default CountDown;
