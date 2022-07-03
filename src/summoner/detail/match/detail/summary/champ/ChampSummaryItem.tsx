import { Avatar } from "../../../../../../shared/component/avatar/Avatar";

interface ChampSummaryItemProps {
  name: string;
  imageUrl: string;
  wins: number;
  losses: number;
  average: number;
}

export function ChampSummaryItem({
  name,
  imageUrl,
  wins,
  losses,
  average,
}: ChampSummaryItemProps) {
  return (
    <li>
      <Avatar size="sm" imageUrl={imageUrl} />
      <div className="detail">
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="rate">
          <span className="win">
            <b>100%</b> ({wins}승 {losses}패)
          </span>
          <span className="average">
            <b>{average} 평점</b>
          </span>
        </div>
      </div>
    </li>
  );
}
