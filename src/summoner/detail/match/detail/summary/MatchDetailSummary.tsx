import { ChampSummary } from "./champ/ChampSummary";
import { PositionSummary } from "./position/PositionSummary";
import { RecentSummary } from "./recent/RecentSummary";
import "./matchDetailSummary.css";

export function MatchDetailSummary() {
  return (
    <div className="summoner-pvp-summary">
      <RecentSummary />
      <ChampSummary />
      <PositionSummary />
    </div>
  );
}
