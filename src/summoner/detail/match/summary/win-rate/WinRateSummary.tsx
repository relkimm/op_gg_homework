import { MainWinRate } from "./main/MainWinRate";
import { SubWinRate } from "./sub/SubWinRate";
import "./winRateSummary.css";

export function WinRateSummary() {
  return (
    <div className="win-rate-summary">
      <MainWinRate />
      <SubWinRate />
    </div>
  );
}
