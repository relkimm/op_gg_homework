import { SummonerMatch } from "./match/SummonerMatch";
import { SummonerProfile } from "./profile/SummonerProfile";

export function SummonerDetail() {
  return (
    <main>
      <SummonerProfile />
      <SummonerMatch />
    </main>
  );
}
