import { MatchType } from "../../summoner/detail/match/detail/matchDetailArticle.hook";

export const summonerQuerykeys = {
  findSummoner: (username: string) => ["findSummoner", username] as const,
  findMostInfo: (username: string) => ["findMostInfo", username] as const,
  findMatches: (username: string, type: MatchType) =>
    ["findMatches", username, type] as const,
} as const;
