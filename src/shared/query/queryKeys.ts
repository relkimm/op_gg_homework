import { searchQueryKeys } from "./searchQueryKeys";
import { summonerQuerykeys } from "./summonerKeys";

export const queryKeys = {
  ...summonerQuerykeys,
  ...searchQueryKeys,
} as const;
