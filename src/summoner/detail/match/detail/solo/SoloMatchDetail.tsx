import { MatchDetailSummary } from "../shared/MatchDetailSummary";
import { SoloMatchList } from "./list/SloloMatchList";

export function SoloMatchDetail() {
  return (
    <>
      <MatchDetailSummary />
      <SoloMatchList />
    </>
  );
}
