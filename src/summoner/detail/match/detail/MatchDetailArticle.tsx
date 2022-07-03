import { MatchDetailMenu } from "./menu/MatchDetailMenu";
import { useAtomValue } from "jotai";
import { activeMenuAtom } from "./menu/matchDetailMenu.atom";
import { AllMatchDetail } from "./all/AllMatchDetail";
import { SoloMatchDetail } from "./solo/SoloMatchDetail";
import { TeamMatchDetail } from "./team/TeamMatchDetail";
import "./matchDetailArticle.css";

export function MatchDetailArticle() {
  const activeMenu = useAtomValue(activeMenuAtom);

  return (
    <article className="main-content">
      <MatchDetailMenu />
      {activeMenu === "all" && <AllMatchDetail />}
      {activeMenu === "solo" && <SoloMatchDetail />}
      {activeMenu === "team" && <TeamMatchDetail />}
    </article>
  );
}
