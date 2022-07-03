import { ChampSummaryItem } from "./ChampSummaryItem";
import "./champSummary.css";

export function ChampSummary() {
  return (
    <div className="champion-summary">
      <ul>
        <ChampSummaryItem
          name="리산드라"
          imageUrl=""
          wins={65}
          losses={55}
          average={65}
        />
        <ChampSummaryItem
          name="리산드라"
          imageUrl=""
          wins={65}
          losses={55}
          average={65}
        />
        <ChampSummaryItem
          name="리산드라"
          imageUrl=""
          wins={65}
          losses={55}
          average={65}
        />
      </ul>
    </div>
  );
}
