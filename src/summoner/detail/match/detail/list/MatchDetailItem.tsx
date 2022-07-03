import { Item } from "../../../../../data/model/Game";
import { GameItemList } from "./GameItemList";

interface MatchDetailItemProps {
  items: Item[];
  isWin: boolean;
}

export function MatchDetailItem({ items, isWin }: MatchDetailItemProps) {
  const isWinStyle = isWin ? "isWin" : "";

  return (
    <li className={isWinStyle}>
      <GameItemList items={items} />
      <div></div>
      <div></div>
    </li>
  );
}
