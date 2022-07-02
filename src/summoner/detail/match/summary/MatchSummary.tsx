import { LeagueSummary } from "./league/LeagueSummary";
import { WinRateSummary } from "./win-rate/WinRateSummary";
import "./matchSummary.css";

export function MatchSummary() {
  return (
    <aside className="match-summary">
      <LeagueSummary />
      <WinRateSummary />
    </aside>
  );
}
