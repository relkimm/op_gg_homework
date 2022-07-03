import { useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { activeMenuAtom } from "../../menu/matchDetailMenu.atom";
import { ChampSummaryItem } from "./ChampSummaryItem";
import { useFindMatches } from "../../matchDetailArticle.hook";
import { SummonerDetailParams } from "../../../../summonerDetail.params";
import { isUndefined } from "../../../../../../shared/util/fs";
import "./champSummary.css";

export function ChampSummary() {
  const { username } = useParams<SummonerDetailParams>();
  const activeMenu = useAtomValue(activeMenuAtom);
  const { data } = useFindMatches(username, activeMenu);

  if (isUndefined(data)) {
    return null;
  }

  const { champions } = data;

  return (
    <div className="champion-summary">
      <ul>
        {champions.map((champion, idx) => (
          <ChampSummaryItem
            key={`${champion.id}_${idx}`}
            name={champion.name}
            imageUrl={champion.imageUrl}
            games={champion.games}
            wins={champion.wins}
            losses={champion.losses}
            kills={champion.kills}
            assists={champion.assists}
            deaths={champion.deaths}
          />
        ))}
      </ul>
    </div>
  );
}
