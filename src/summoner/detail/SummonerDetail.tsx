import { SummonerGame } from "./game/SummonerGameInfo";
import { SummonerProfile } from "./profile/SummonerProfile";

export function SummonerDetail() {
  return (
    <main>
      <SummonerProfile />
      <SummonerGame />
    </main>
  );
}
