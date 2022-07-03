import { Avatar } from "../../../../../../../shared/component/avatar/Avatar";
import { RateCalculator } from "../../../../../../../shared/util/rate";
import {
  kdaRateStyle,
  totalRateStyle,
  winRateStyle,
} from "../../../../../../../shared/util/style";

interface ChampWinRateItemProps {
  name: string;
  games: number;
  wins: number;
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
  imageUrl: string;
}

export function ChampWinRateItem({
  name,
  imageUrl,
  cs,
  wins,
  kills,
  deaths,
  assists,
  games,
}: ChampWinRateItemProps) {
  const { kda, total, win } = RateCalculator(games);
  const totalRate = total(kills, assists, deaths);
  const killRate = kda(kills);
  const assistRate = kda(assists);
  const deathRate = kda(deaths);
  const winRate = win(wins);

  return (
    <li className="champ-item">
      <Avatar size="md" imageUrl={imageUrl} />
      <div className="champ-info">
        <div className="name">{name}</div>
        <div className="cs">CS {cs} (2.4)</div>
      </div>
      <div className="kda-info">
        <div className="average" style={totalRateStyle(totalRate)}>
          {totalRate}:1 평점
        </div>
        <div className="detail">
          <span style={kdaRateStyle(killRate)}>{killRate}</span>
          <span> / </span>
          <span style={kdaRateStyle(assistRate)}>{assistRate}</span>
          <span> / </span>
          <span style={kdaRateStyle(deathRate)}>{deathRate}</span>
        </div>
      </div>
      <div className="game-info">
        <div className="average" style={winRateStyle(winRate)}>
          {winRate}%
        </div>
        <div className="count">{games}게임</div>
      </div>
    </li>
  );
}
