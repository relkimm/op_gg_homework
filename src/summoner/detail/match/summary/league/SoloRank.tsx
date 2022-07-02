import { useParams } from "react-router-dom";
import { isUndefined } from "../../../../../shared/util/fs";
import { useFindSummoner } from "../../../profile/summonerProfile.hook";
import { SummonerDetailParams } from "../../../summonerDetail.params";

export function SoloRank() {
  const { username } = useParams<SummonerDetailParams>();
  const { data: summoner } = useFindSummoner(username);
  if (isUndefined(summoner)) {
    return null;
  }

  const { leagues } = summoner;
  const { wins, losses, tierRank } = leagues[0];

  return (
    <div className="solo-rank">
      <div className="icon">
        <img src={tierRank.imageUrl} alt="" />
      </div>
      <div className="info">
        <ul>
          <li>
            <span>솔로 랭크</span>
          </li>
          <li>
            <span>탑 {`(총 ${wins + losses} 게임)`}</span>
          </li>
          <li>
            <span>
              {tierRank.tier} {tierRank.shortString}
            </span>
          </li>
          <li>
            <span>
              {tierRank.lp} / {`${wins}승 ${losses}패`}
            </span>
          </li>
          <li>
            <span>{`승률 ${(wins / losses + wins) * 100}`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}