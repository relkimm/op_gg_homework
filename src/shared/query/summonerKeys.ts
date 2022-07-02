export const summonerQuerykeys = {
  findSummoner: (username: string) => ["findSummoner", username] as const,
  findMostInfo: (username: string) => ["findMostInfo", username] as const,
} as const;
