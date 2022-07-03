export interface Game {
  champion: { imageUrl: string; level: number };
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: Item[];
  mmr: number;
  needRenew: boolean;
  peak: string[];
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface Item {
  imageUrl: string;
}
