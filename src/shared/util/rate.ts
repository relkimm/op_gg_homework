import { fixed0, fixed1, fixed2 } from "./number";

export const kdaRate = (games: number) => (kda: number) => fixed2(kda / games);

export const totalRate =
  (games: number) => (kills: number, assists: number, deaths: number) => {
    const kda = kdaRate(games);
    return fixed1((kda(kills) + kda(assists) + kda(deaths)) / 3);
  };

export const winRate = (games: number) => (wins: number) => {
  return fixed0((wins / games) * 100);
};

export const pickRate = (games: number) => (picks: number) => {
  return fixed0((picks / games) * 100);
};

export const RateCalculator = (games: number) => ({
  kda: kdaRate(games),
  total: totalRate(games),
  win: winRate(games),
  pick: pickRate(games),
});
