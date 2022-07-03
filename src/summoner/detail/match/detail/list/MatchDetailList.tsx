import { useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { activeMenuAtom } from "../menu/matchDetailMenu.atom";
import { isUndefined, take } from "../../../../../shared/util/fs";
import { SummonerDetailParams } from "../../../summonerDetail.params";
import { useFindMatches } from "../matchDetailArticle.hook";

import { MatchDetailItem } from "./MatchDetailItem";
import "./matchDetailList.css";

export function MatchDetailList() {
  const { username } = useParams<SummonerDetailParams>();
  const activeMenu = useAtomValue(activeMenuAtom);
  const { data } = useFindMatches(username, activeMenu);

  if (isUndefined(data)) {
    return null;
  }

  const { games } = data;

  return (
    <div className="match-detail-list">
      <ul>
        {take(12, games).map((game, idx) => (
          <MatchDetailItem key={idx} isWin={game.isWin} items={game.items} />
        ))}
      </ul>
    </div>
  );
}
