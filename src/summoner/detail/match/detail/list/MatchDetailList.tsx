import "./matchDetailList.css";
import { AllMatchList } from "./all/AllMatchList";
import { SoloMatchList } from "./solo/SloloMatchList";
import { TeamMatchList } from "./team/TeamMatchList";

export function MatchDetailList() {
  return (
    <>
      <AllMatchList />
      <SoloMatchList />
      <TeamMatchList />
    </>
  );
}
