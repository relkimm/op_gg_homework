import { Avatar } from "../../../../../../shared/component/avatar/Avatar";
import { RateCalculator } from "../../../../../../shared/util/rate";
import {
  totalRateStyle,
  winRateStyle,
} from "../../../../../../shared/util/style";

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
  const winRate = win(wins);
  const totalRate = total(kills, assists, deaths);

  return (
    <li>
      <Avatar size="sm" imageUrl={imageUrl} />
      <div className="detail">
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="rate">
          <span className="win">
            <b style={winRateStyle(winRate)}>{winRate}%</b> ({wins}승 {losses}
            패)
          </span>
          <span className="average">
            <b style={totalRateStyle(totalRate)}>{totalRate} 평점</b>
          </span>
        </div>
      </div>
    </li>
  );
}
