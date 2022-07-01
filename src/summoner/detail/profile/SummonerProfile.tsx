import { SummonerImage } from "./component/SummonerImage";
import { SummonerRanking } from "./component/SummonerRanking";
import { SummonerTier } from "./component/SummonerTier";
import { SummonerUsername } from "./component/SummonerUsername";

export function SummonerProfile() {
  return (
    <>
      <SummonerTier />
      <SummonerImage />
      <SummonerUsername />
      <SummonerRanking />
    </>
  );
}
