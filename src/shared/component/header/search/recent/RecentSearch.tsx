import { useAtomValue } from "jotai";
import { fiveRecentAtom } from "./recentSearch.atom";
import { RecentSearchItem } from "./RecentSearchItem";
import "./recentSearch.css";

export function RecentSearch() {
  const fiveRecent = useAtomValue(fiveRecentAtom);

  return (
    <div className="recent-search">
      <div className="menu">
        <button>최근검색</button>
        <button>즐겨찾기</button>
      </div>
      <div className="list">
        <ul>
          {fiveRecent.map((recent, idx) => (
            <RecentSearchItem
              key={`${recent}_${idx}`}
              idx={idx}
              word={recent}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
