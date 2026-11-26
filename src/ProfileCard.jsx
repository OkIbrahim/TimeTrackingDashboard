function ProfileCard({ timeframes, activeTimeFrame, onSelectTimeFrame }) {
  return (
    <div className="profile-card">
      <div className="profile">
        <img
          src="/images/image-jeremy.png"
          alt="Jeremy image"
          className="profile-img"
        />
        <div className="profile-details">
          <p className="profile-paragraph">Report for</p>
          <h3 className="profile-name">
            Jeremy
            <span className="surname"> Robson</span>
          </h3>
        </div>
      </div>
      <div className="timeframe-buttons">
        {timeframes.map((tf) => (
          <button
            key={tf}
            type="button"
            aria-pressed={activeTimeFrame === tf}
            className={activeTimeFrame === tf ? "active" : ""}
            onClick={() => onSelectTimeFrame(tf)}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
