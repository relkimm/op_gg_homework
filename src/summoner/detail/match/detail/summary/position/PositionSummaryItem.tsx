import { DefaultPositionIcon } from "../../../../../../shared/constant";
import { RateCalculator } from "../../../../../../shared/util/rate";
import { toKRPositionName } from "./util";

const PositionImages: Record<string, string> = {
  Top: "https://s-lol-web.op.gg/images/icon/icon-position-top.svg",
  Jungle: "https://s-lol-web.op.gg/images/icon/icon-position-jungle.svg",
  Middle: "https://s-lol-web.op.gg/images/icon/icon-position-mid.svg",
  Bottom: "https://s-lol-web.op.gg/images/icon/icon-position-adc.svg",
  Support: "https://s-lol-web.op.gg/images/icon/icon-position-support.svg",
};

interface PositionSummaryItemProps {
  name: string;
  games: number;
  wins: number;
}

export function PositionSummaryItem({
  name,
  games,
  wins,
}: PositionSummaryItemProps) {
  const { win, pick } = RateCalculator(games);

  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DefaultPositionIcon();
  };

  return (
    <li className="info">
      <div className="icon">
        <img src={PositionImages[name]} alt="positionIcon" onError={onError} />
      </div>
      <div className="detail">
        <ul>
          <li className="name">
            <span>{toKRPositionName(name)}</span>
          </li>
          <li className="rate">
            <span className="pick">{pick(wins)}%</span>
            <span className="win">승률 {win(wins)}%</span>
          </li>
        </ul>
      </div>
    </li>
  );
}
