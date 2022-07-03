import { MatchDetailSummary } from "../shared/MatchDetailSummary";
import { TeamMatchList } from "./list/TeamMatchList";

export function TeamMatchDetail() {
  return (
    <>
      <MatchDetailSummary />
      <TeamMatchList />
    </>
  );
}
