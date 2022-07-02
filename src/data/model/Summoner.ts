import { LadderRank } from "./LadderRank";
import { League } from "./League";
import { TierRank } from "./TierRank";

export interface Summoner {
  name: string;
  level: number;
  leagues: League[];
  ladderRank: LadderRank;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}
