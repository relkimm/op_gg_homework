import { Avatar } from "../../../../../../../shared/component/avatar/Avatar";
import { RateCalculator } from "../../../../../../../shared/util/rate";

interface ChampWinRateItemProps {
  name: string;
  games: number;
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
  kills,
  deaths,
  assists,
  games,
}: ChampWinRateItemProps) {
  const { kda, total } = RateCalculator(games);

  return (
    <li className="champ-item">
      <Avatar size="md" imageUrl={imageUrl} />
      <div className="champ-info">
        <div className="name">{name}</div>
        <div className="cs">CS {cs} (2.4)</div>
      </div>
      <div className="kda-info">
        <div className="average">{total(kills, assists, deaths)}:1 평점</div>
        <div className="detail">
          {kda(kills)} / {kda(assists)} / {kda(deaths)}
        </div>
      </div>
      <div className="game-info">
        <div className="average">71%</div>
        <div className="count">{games}게임</div>
      </div>
    </li>
  );
}
