import axios from "axios";
import { AxiosReturn } from "../axios";
import { Summoner } from "../model/Summoner";

export function findSummoner(username: string) {
  const url = `/api/summoner/${username}`;
  return axios.get<{ summoner: Summoner }>(url).then(AxiosReturn);
}
