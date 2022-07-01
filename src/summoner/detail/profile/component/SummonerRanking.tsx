import { useParams } from "react-router-dom";
import { isUndefined } from "../../../../shared/util/fs";
import { putComma } from "../../../../shared/util/string";
import { SummonerDetailParams } from "../../summonerDetail.params";
import { useFindSummoner } from "../summonerProfile.hook";

export function SummonerRanking() {
  const { username } = useParams<SummonerDetailParams>();
  const { data: summoner } = useFindSummoner(username);

  if (isUndefined(summoner)) {
    return null;
  }
  const { ladderRank } = summoner;

  return (
    <li>
      <span className="ranking">
        레더 랭킹 <b>{putComma(ladderRank.rank)}</b>위
        {` (상위 ${ladderRank.rankPercentOfTop}%)`}
      </span>
    </li>
  );
}
