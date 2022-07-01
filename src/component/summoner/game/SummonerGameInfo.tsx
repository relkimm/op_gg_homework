import { GameDetailList } from "./detail/GameDetailList";
import { GameSummarySideBar } from "./summary/GameSummarySideBar";

export function SummonerGame() {
  return (
    <>
      <GameSummarySideBar />
      <GameDetailList />
    </>
  );
}
