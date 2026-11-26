import { useState } from "react";
import data from "./data.json";
import ProfileCard from "./ProfileCard";
import ActivityCard from "./ActivityCard";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");
  // Extracts ['daily', 'weekly', 'monthly'] from the first object in data.json
  const timeframeOptions = Object.keys(data[0].timeframes);

  return (
    <div className="app-container">
      <ProfileCard
        timeframes={timeframeOptions}
        activeTimeFrame={timeframe}
        onSelectTimeFrame={setTimeframe}
      />

      {data.map((activity) => (
        <ActivityCard
          key={activity.title}
          title={activity.title}
          current={activity.timeframes[timeframe].current}
          previous={activity.timeframes[timeframe].previous}
          timeframe={timeframe}
        />
      ))}
    </div>
  );
}

export default App;
