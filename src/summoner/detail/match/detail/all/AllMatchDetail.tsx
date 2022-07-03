import { MatchDetailSummary } from "../shared/MatchDetailSummary";
import { AllMatchList } from "./list/AllMatchList";
import { AllMatchSummary } from "./summary/AllMatchSummary";

export function AllMatchDetail() {
  return (
    <>
      <MatchDetailSummary />
      <AllMatchList />
    </>
  );
}
