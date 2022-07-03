import { MatchDetailArticle } from "./detail/MatchDetailArticle";
import { MatchSummaryAside } from "./summary/MatchSummaryAside";
import "./summonerMatch.css";

export function SummonerMatch() {
  return (
    <div className="summoner-match">
      <MatchSummaryAside />
      <MatchDetailArticle />
    </div>
  );
}
