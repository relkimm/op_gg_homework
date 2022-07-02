import { MatchDetail } from "./detail/MatchDetail";
import { MatchSummary } from "./summary/MatchSummary";
import "./summonerMatch.css";

export function SummonerMatch() {
  return (
    <div className="summoner-match">
      <MatchSummary />
      <MatchDetail />
    </div>
  );
}
