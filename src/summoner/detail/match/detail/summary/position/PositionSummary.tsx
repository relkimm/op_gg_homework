import { useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { activeMenuAtom } from "../../menu/matchDetailMenu.atom";
import { PositionSummaryItem } from "./PositionSummaryItem";
import { useFindMatches } from "../../matchDetailArticle.hook";
import { SummonerDetailParams } from "../../../../summonerDetail.params";
import { isUndefined } from "../../../../../../shared/util/fs";
import "./positionSummary.css";

export function PositionSummary() {
  const { username } = useParams<SummonerDetailParams>();
  const activeMenu = useAtomValue(activeMenuAtom);
  const { data } = useFindMatches(username, activeMenu);

  if (isUndefined(data)) {
    return null;
  }

  const { positions } = data;

  return (
    <div className="position-summary">
      <ul>
        <li className="title">
          <span>선호 포지션 (랭크)</span>
        </li>
        {positions.map((position, idx) => (
          <PositionSummaryItem
            key={`${position.position}_${idx}`}
            name={position.positionName}
            games={position.games}
            wins={position.wins}
          />
        ))}
      </ul>
    </div>
  );
}
