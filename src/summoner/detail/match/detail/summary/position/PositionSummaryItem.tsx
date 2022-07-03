import { DefaultPositionIcon } from "../../../../../../shared/constant";

interface PositionSummaryItemProps {
  name: string;
  imageUrl: string;
  pickRate: number;
  winRate: number;
}

export function PositionSummaryItem({
  name,
  imageUrl,
  pickRate,
  winRate,
}: PositionSummaryItemProps) {
  const onError = () => {
    DefaultPositionIcon();
  };

  return (
    <li className="info">
      <div className="icon">
        <img src={imageUrl} alt="positionIcon" onError={onError} />
      </div>
      <div className="detail">
        <ul>
          <li className="name">
            <span>{name}</span>
          </li>
          <li className="rate">
            <span className="pick">{pickRate}%</span>
            <span className="win">승률 {winRate}%</span>
          </li>
        </ul>
      </div>
    </li>
  );
}
