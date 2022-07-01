import { useQuery } from "react-query";
import { findSummoner } from "../../../data/api/summonerApi";
import { queryKeys } from "../../../shared/query/queryKeys";

export function useFindSummoner(username: string = "") {
  const { data, isLoading } = useQuery(
    queryKeys.findSummoner(username),
    () => {
      return findSummoner(username);
    },
    {
      enabled: !!username,
    }
  );

  return { data: data?.summoner, isLoading };
}
