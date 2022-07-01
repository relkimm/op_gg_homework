import { useParams } from "react-router-dom";
import { SummonerDetailParams } from "../../summonerDetail.params";
import { useFindSummoner } from "../summonerProfile.hook";
import { TierItem } from "./TierItem";

export function SummonerTier() {
  const { username } = useParams<SummonerDetailParams>();
  const { data: summoner } = useFindSummoner(username);

  return (
    <div className="tier">
      <ul>
        {summoner?.previousTiers.map((tier, idx) => (
          <TierItem
            key={`${tier.season}_${idx}`}
            season={tier.season}
            tier={tier.tier}
          />
        ))}
      </ul>
    </div>
  );
}
