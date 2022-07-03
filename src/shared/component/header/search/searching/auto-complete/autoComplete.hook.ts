import { useQuery } from "react-query";
import { searchAutoComplete } from "../../../../../../data/api/searchApi";
import { queryKeys } from "../../../../../query/queryKeys";

export const useSearchAutoComplete = (keyword: string = "") => {
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
