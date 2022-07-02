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
        {take(7, champions).map((champion) => (
          <ChampWinRateItem {...champion} />
        ))}
      </ul>
    </div>
  );
}
