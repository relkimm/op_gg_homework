import { useParams } from "react-router-dom";
import { SummonerDetailParams } from "../../summonerDetail.params";
import { useFindSummoner } from "../summonerProfile.hook";

export function SummonerUsername() {
  const { username } = useParams<SummonerDetailParams>();
  const { data: summoner } = useFindSummoner(username);

  return (
    <li>
      <span className="username">{summoner?.name}</span>
    </li>
  );
}
