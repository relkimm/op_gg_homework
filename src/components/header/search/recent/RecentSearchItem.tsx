import { DeleteButton } from "./DeleteButton";
import "./recentSearch.css";

export function RecentSearchItem() {
  return (
    <li className="item">
      <a>자메이카의영혼</a>
      <DeleteButton />
    </li>
  );
}
