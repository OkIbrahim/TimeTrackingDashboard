const previousLabels = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

const categoryStyles = {
  Work: { color: "hsl(15, 100%, 70%)", icon: "/images/icon-work.svg" },
  Play: { color: "hsl(195, 74%, 62%)", icon: "/images/icon-play.svg" },
  Study: { color: "hsl(348, 100%, 68%)", icon: "/images/icon-study.svg" },
  Exercise: { color: "hsl(145, 58%, 55%)", icon: "/images/icon-exercise.svg" },
  Social: { color: "hsl(264, 64%, 52%)", icon: "/images/icon-social.svg" },
  "Self Care": {
    color: "hsl(43, 84%, 65%)",
    icon: "/images/icon-self-care.svg",
  },
};

function ActivityCard({ title, current, previous, timeframe }) {
  const { color, icon } = categoryStyles[title];

  return (
    <article className="activity-card">
      {/* Colored Header Banner with Clipped Icon */}
      <div className="activity-banner" style={{ backgroundColor: color }}>
        <img src={icon} alt="" aria-hidden="true" className="activity-icon" />
      </div>

      {/* Overlapping Dark Stats Card */}
      <div className="activity-content">
        <header className="activity-header">
          <h2 className="activity-title">{title}</h2>
          <button
            type="button"
            aria-label={`More options for ${title}`}
            className="ellipsis-icon"
          >
            <img src="images/icon-ellipsis.svg" alt="ellipsis icon" />
          </button>
        </header>

        <div className="activity-stats">
          <p className="current-hours">{current}hrs</p>
          <p className="previous-hours">
            {previousLabels[timeframe]} - {previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}

export default ActivityCard;
