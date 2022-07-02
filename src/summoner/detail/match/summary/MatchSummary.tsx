import { LeagueSummary } from "./league/LeagueSummary";
import { WinRateSummary } from "./win-rate/WinRateSummary";

export function MatchSummary() {
  return (
    <>
      <LeagueSummary />
      <WinRateSummary />
    </>
  );
}
