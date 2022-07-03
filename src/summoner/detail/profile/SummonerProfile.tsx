import { SummonerIcon } from "./component/SummonerIcon";
import { SummonerRanking } from "./component/SummonerRanking";
import { SummonerTier } from "./component/SummonerTier";
import { SummonerUsername } from "./component/SummonerUsername";
import "./summonerProfile.css";

export function SummonerProfile() {
  return (
    <div className="summoner-profile">
      <SummonerTier />
      <div className="profile-main">
        <SummonerIcon />
        <div className="profile-inner">
          <ul>
            <SummonerUsername />
            <SummonerRanking />
          </ul>
        </div>
      </div>
    </div>
  );
}
