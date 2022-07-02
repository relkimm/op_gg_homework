import { ChamWinRate } from "./ChamWinRate";
import { RankWinRate } from "./RankWinRate";

export function WinRateSummary() {
  return (
    <>
      <ChamWinRate />
      <RankWinRate />
    </>
  );
}
