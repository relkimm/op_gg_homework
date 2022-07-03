import { useParams } from "react-router-dom";
import { isUndefined, take } from "../../../../../../../shared/util/fs";
import { SummonerDetailParams } from "../../../../../summonerDetail.params";
import { useFindMostInfo } from "../mainWinRate.hook";
import { ChampWinRateItem } from "./ChampWinRateItem";
import "./mainChampWinRate.css";

export function MainChampWinRate() {
  const { username } = useParams<SummonerDetailParams>();
  const { data } = useFindMostInfo(username);

  if (isUndefined(data)) {
    return null;
  }

  const { champions } = data;

  return (
    <div className="champ-win-rate">
      <ul>
        {take(6, champions).map((champion, idx) => (
          <ChampWinRateItem
            key={`${champion.id}_${idx}`}
            name={champion.name}
            games={champion.games}
            kills={champion.kills}
            deaths={champion.deaths}
            assists={champion.assists}
            cs={champion.cs}
            imageUrl={champion.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
}
