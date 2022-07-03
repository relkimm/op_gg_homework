import { useParams } from "react-router-dom";
import { TierIcon } from "../../../../../shared/component/icon/TierIcon";
import { isUndefined } from "../../../../../shared/util/fs";
import { RateCalculator } from "../../../../../shared/util/rate";
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

  const games = wins + losses;
  const { win } = RateCalculator(games);

  return (
    <div className="solo-rank">
      <TierIcon size="lg" imageUrl={tierRank.imageUrl} />
      <div className="info">
        <ul>
          <li>
            <span>솔로 랭크</span>
          </li>
          <li>
            <span>탑 {`(총 ${games} 게임)`}</span>
          </li>
          <li>
            <span>
              {tierRank.tier} {tierRank.shortString}
            </span>
          </li>
          <li>
            <span>
              {tierRank.lp} lp / {`${wins}승 ${losses}패`}
            </span>
          </li>
          <li>
            <span>{`승률 ${win(wins)}%`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
