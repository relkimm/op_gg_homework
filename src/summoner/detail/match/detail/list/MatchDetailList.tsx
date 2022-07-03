import { MatchDetailItem } from "./MatchDetailItem";
import "./matchDetailList.css";

export function MatchDetailList() {
  return (
    <div className="summoner-pvp-detail">
      <ul>
        <MatchDetailItem />
        <MatchDetailItem />
        <MatchDetailItem />
        <MatchDetailItem />
      </ul>
    </div>
  );
}
