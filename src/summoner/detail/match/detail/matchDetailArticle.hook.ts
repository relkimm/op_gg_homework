import { useQuery } from "react-query";
import { findMatches } from "../../../../data/api/summonerApi";
import { queryKeys } from "../../../../shared/query/queryKeys";

export type MatchType = "all" | "solo" | "team";

export function useFindMatches(username: string = "", type: MatchType) {
  return useQuery(
    queryKeys.findMatches(username, type),
    () => {
      return findMatches(username, type);
    },
    {
      enabled: !!username,
    }
  );
}
