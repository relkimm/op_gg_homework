import { useCallback } from "react";
import { Avatar } from "../../../../../../../shared/component/avatar/Avatar";
import { fixed1 } from "../../../../../../../shared/util/string";

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
  const average = useCallback(
    (target: number) => {
      return target / games;
    },
    [games]
  );

  const fixedAverage = (target: number) => {
    return fixed1(average(target));
  };

  const kdaAverage = () => {
    return fixed1((average(kills) + average(assists)) / average(deaths));
  };

  return (
    <li className="champ-item">
      <Avatar size="md" imageUrl={imageUrl} />
      <div className="champ-info">
        <div className="name">{name}</div>
        <div className="cs">CS {fixedAverage(cs)} (2.4)</div>
      </div>
      <div className="kda-info">
        <div className="average">{kdaAverage()}:1 평점</div>
        <div className="detail">
          {fixedAverage(kills)} / {fixedAverage(assists)} /{" "}
          {fixedAverage(deaths)}
        </div>
      </div>
      <div className="game-info">
        <div className="average">71%</div>
        <div className="count">{games}게임</div>
      </div>
    </li>
  );
}
