import { DefaultPositionIcon } from "../../../../../../shared/constant";
import { PositionSummaryItem } from "./PositionSummaryItem";
import "./positionSummary.css";

export function PositionSummary() {
  return (
    <div className="position-summary">
      <ul>
        <li className="title">
          <span>선호 포지션 (랭크)</span>
        </li>
        <PositionSummaryItem
          name="탑"
          imageUrl={DefaultPositionIcon()}
          pickRate={75}
          winRate={55}
        />
        <PositionSummaryItem
          name="탑"
          imageUrl={DefaultPositionIcon()}
          pickRate={75}
          winRate={55}
        />
      </ul>
    </div>
  );
}
