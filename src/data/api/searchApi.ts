import axios from "axios";
import { AxiosReturn } from "../axios";
import { AutoComplete } from "../model/AutoComplete";
import { SearchResult } from "../model/SearchResult";

export const searchAutoComplete = (keyword: string) => {
  const url = `/autocomplete?keyword=${keyword}`;
  return axios.get<SearchResult<AutoComplete>>(url).then(AxiosReturn);
};
