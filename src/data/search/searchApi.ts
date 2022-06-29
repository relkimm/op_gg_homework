import axios from "axios";
import { AxiosReturn } from "../axios";
import { AutoComplete } from "./AutoComplete";
import { SearchResult } from "./SearchResult";

export const searchAutoComplete = (keyword: string) => {
  const url = `/autocomplete?keyword=${keyword}`;
  return axios.get<SearchResult<AutoComplete>>(url).then(AxiosReturn);
};
