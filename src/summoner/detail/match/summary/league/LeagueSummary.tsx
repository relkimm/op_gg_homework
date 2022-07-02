import { TeamRank } from "./TeamRank";
import { SoloRank } from "./SoloRank";
import "./leagueSummary.css";

export function LeagueSummary() {
  return (
    <div className="league-summary">
      <SoloRank />
      <TeamRank />
    </div>
  );
}
