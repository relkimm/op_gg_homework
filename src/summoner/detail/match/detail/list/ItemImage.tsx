import { useSetAtom } from "jotai";
import "./itemImage.css";
import { ItemToolTip } from "./ItemToolTip";

export interface ItemImageProps {
  imageUrl: string;
}

export function ItemImage({ imageUrl }: ItemImageProps) {
  return (
    <>
      <div className="item-image">
        <img src={imageUrl} />
      </div>
      <ItemToolTip />
    </>
  );
}
