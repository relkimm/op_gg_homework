import { MatchDetailMenu } from "./menu/MatchDetailMenu";
import { MatchDetailSummary } from "./summary/MatchDetailSummary";
import { MatchDetailList } from "./list/MatchDetailList";
import "./matchDetailArticle.css";

export function MatchDetailArticle() {
  return (
    <article className="match-detail">
      <MatchDetailMenu />
      <MatchDetailSummary />
      <MatchDetailList />
    </article>
  );
}
