import { useParams } from "react-router-dom";
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
  const { wins, losses, tierRank } = leagues[0];

  return (
    <div className="team-rank">
      <div className="icon">
        <img src={tierRank.imageUrl} alt="" />
      </div>
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
