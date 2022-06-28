import { RecentSearchItem } from "./RecentSearchItem";
import "./recentSearch.css";

export function RecentSearch() {
  return (
    <div className="recent-search">
      <div className="menu">
        <button>최근검색</button>
        <button>즐겨찾기</button>
      </div>
      <div className="list">
        <ul>
          <RecentSearchItem />
          <RecentSearchItem />
          <RecentSearchItem />
          <RecentSearchItem />
          <RecentSearchItem />
        </ul>
      </div>
    </div>
  );
}
