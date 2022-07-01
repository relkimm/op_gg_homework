import { LadderRank } from "./LadderRank";
import { TierRank } from "./TierRank";

export interface Summoner {
  name: string;
  level: number;
  ladderRank: LadderRank;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}
