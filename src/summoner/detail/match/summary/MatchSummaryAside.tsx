import { LeagueSummary } from "./league/LeagueSummary";
import { WinRateSummary } from "./win-rate/WinRateSummary";
import "./matchSummaryAside.css";

export function MatchSummaryAside() {
  return (
    <aside className="match-summary">
      <LeagueSummary />
      <WinRateSummary />
    </aside>
  );
}
