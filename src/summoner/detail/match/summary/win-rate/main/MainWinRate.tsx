import { useAtomValue } from "jotai";
import { activeMenuAtom } from "./mainWinRate.atom";
import { MainWinRateMenu } from "./MainWinRateMenu";
import { MainChampWinRate } from "./champ/MainChampWinRate";
import { MainRankWinRate } from "./rank/MainRankWinRate";
import "./mainWinRate.css";

export function MainWinRate() {
  const activeMenu = useAtomValue(activeMenuAtom);

  return (
    <div className="main-win-rate">
      <MainWinRateMenu />
      {activeMenu === "champ" && <MainChampWinRate />}
      {activeMenu === "rank" && <MainRankWinRate />}
    </div>
  );
}
