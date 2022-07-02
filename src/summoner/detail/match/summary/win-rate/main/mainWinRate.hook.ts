import { useQuery } from "react-query";
import { findMostInfo } from "../../../../../../data/api/summonerApi";
import { queryKeys } from "../../../../../../shared/query/queryKeys";

export function useFindMostInfo(username: string = "") {
  return useQuery(
    queryKeys.findMostInfo(username),
    () => {
      return findMostInfo(username);
    },
    {
      enabled: !!username,
    }
  );
}
