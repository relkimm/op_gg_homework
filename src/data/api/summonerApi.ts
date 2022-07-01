import axios from "axios";
import { AxiosReturn } from "../axios";
import { Summoner } from "../model/Summoner";

const BASE_URL = "https://codingtest.op.gg";

interface SummonerResponse {
  summoner: Summoner;
}

export function findSummoner(username: string) {
  const url = `${BASE_URL}/api/summoner/${username}`;
  return axios.get<SummonerResponse>(url).then(AxiosReturn);
}
