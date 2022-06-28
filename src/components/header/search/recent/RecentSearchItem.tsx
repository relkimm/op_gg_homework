import { DeleteButton } from "./DeleteButton";
import "./recentSearch.css";

export function RecentSearchItem() {
  return (
    <li className="item">
      <a>
        <span>자메이카의영혼</span>
      </a>
      <DeleteButton />
    </li>
  );
}
