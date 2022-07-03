import { useParams } from "react-router-dom";
import { TierIcon } from "../../../../../shared/component/icon/TierIcon";
import { isUndefined } from "../../../../../shared/util/fs";
import { useFindSummoner } from "../../../profile/summonerProfile.hook";
import { SummonerDetailParams } from "../../../summonerDetail.params";

export function TeamRank() {
  const { username } = useParams<SummonerDetailParams>();
  const { data: summoner } = useFindSummoner(username);
  if (isUndefined(summoner)) {
    return null;
  }

  const { leagues } = summoner;
  const { tierRank } = leagues[1];

  return (
    <div className="team-rank">
      <TierIcon size="md" imageUrl={tierRank.imageUrl} />
      <div className="info">
        <ul>
          <li>
            <span>자유 5:5 랭크</span>
          </li>
          <li>
            <span>Unranked</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
