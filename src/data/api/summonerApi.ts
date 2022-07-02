import axios from "axios";
import { AxiosReturn } from "../axios";
import { Champion } from "../model/Champion";
import { RecentWinRate } from "../model/RecentWinRate";
import { Summoner } from "../model/Summoner";

const BASE_URL = "https://codingtest.op.gg";

interface SummonerResponse {
  summoner: Summoner;
}

interface MostInfoResponse {
  champions: Champion[];
  recentWinRate: RecentWinRate[];
}

export function findSummoner(username: string) {
  const url = `${BASE_URL}/api/summoner/${username}`;
  return axios.get<SummonerResponse>(url).then(AxiosReturn);
}

export function findMostInfo(username: string) {
  const url = `${BASE_URL}/api/summoner/${username}/mostInfo`;
  return axios.get<MostInfoResponse>(url).then(AxiosReturn);
}
