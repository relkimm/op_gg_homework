import { TierRank } from "./TierRank";

export interface League {
  hasResults: boolean;
  losses: number;
  tierRank: TierRank;
  wins: number;
}
