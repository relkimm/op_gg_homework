import { Item } from "../../../../../data/model/Game";
import { ItemImage } from "./ItemImage";
import "./gameItemList.css";

interface GameItemListProps {
  items: Item[];
}

export function GameItemList({ items }: GameItemListProps) {
  return (
    <div className="item-list">
      <ul>
        {items.map((item, idx) => (
          <ItemImage key={idx} imageUrl={item.imageUrl} />
        ))}
      </ul>
    </div>
  );
}
