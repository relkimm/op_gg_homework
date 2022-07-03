import axios from "axios";
import { MatchType } from "../../summoner/detail/match/detail/matchDetailArticle.hook";
import { AxiosReturn } from "../axios";
import { Champion } from "../model/Champion";
import { Position } from "../model/Position";
import { RecentWinRate } from "../model/RecentWinRate";
import { Summary } from "../model/Summary";
import { Summoner } from "../model/Summoner";

const BASE_URL = "https://codingtest.op.gg";

interface SummonerResponse {
  summoner: Summoner;
}

interface MostInfoResponse {
  champions: Champion[];
  recentWinRate: RecentWinRate[];
}

interface MatchesResponse {
  champions: Champion[];
  games: [];
  positions: Position[];
  summary: Summary;
}

export function findSummoner(username: string) {
  const url = `${BASE_URL}/api/summoner/${username}`;
  return axios.get<SummonerResponse>(url).then(AxiosReturn);
}

export function findMostInfo(username: string) {
  const url = `${BASE_URL}/api/summoner/${username}/mostInfo`;
  return axios.get<MostInfoResponse>(url).then(AxiosReturn);
}

export function findMatches(username: string, type: MatchType) {
  const url = `${BASE_URL}/api/summoner/${username}/matches`;
  return axios.get<MatchesResponse>(url).then(AxiosReturn);
}
