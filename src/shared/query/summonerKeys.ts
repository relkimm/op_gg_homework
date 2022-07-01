export const summonerQuerykeys = {
  findSummoner: (username: string) => ["findSummoner", username] as const,
} as const;
