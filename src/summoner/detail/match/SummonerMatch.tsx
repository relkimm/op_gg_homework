import { MatchDetail } from "./detail/MatchDetail";
import { MatchSummary } from "./summary/MatchSummary";

export function SummonerMatch() {
  return (
    <>
      <MatchSummary />
      <MatchDetail />
    </>
  );
}
