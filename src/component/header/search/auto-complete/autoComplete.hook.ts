import { useQuery } from "react-query";
import { searchAutoComplete } from "../../../../data/search/searchApi";
import { queryKeys } from "../../../../shared/query/queryKeys";

export const useSearchAutoComplete = (keyword: string) => {
  return useQuery(
    queryKeys.searchAutoComplete(keyword),
    () => {
      return searchAutoComplete(keyword);
    },
    {
      enabled: !!keyword,
    }
  );
};
