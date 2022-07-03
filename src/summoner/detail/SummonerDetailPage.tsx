import { SummonerMatch } from "./match/SummonerMatch";
import { SummonerProfile } from "./profile/SummonerProfile";

export function SummonerDetailPage() {
  return (
    <main>
      <SummonerProfile />
      <SummonerMatch />
    </main>
  );
}
