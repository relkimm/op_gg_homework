import { Avatar } from "../../../../../../shared/component/avatar/Avatar";
import { RateCalculator } from "../../../../../../shared/util/rate";

interface ChampSummaryItemProps {
  name: string;
  imageUrl: string;
  games: number;
  wins: number;
  losses: number;
  kills: number;
  assists: number;
  deaths: number;
}

export function ChampSummaryItem({
  name,
  imageUrl,
  games,
  wins,
  losses,
  kills,
  assists,
  deaths,
}: ChampSummaryItemProps) {
  const { win, total } = RateCalculator(games);

  return (
    <li>
      <Avatar size="sm" imageUrl={imageUrl} />
      <div className="detail">
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="rate">
          <span className="win">
            <b>{win(wins)}%</b> ({wins}승 {losses}패)
          </span>
          <span className="average">
            <b>{total(kills, assists, deaths)} 평점</b>
          </span>
        </div>
      </div>
    </li>
  );
}
