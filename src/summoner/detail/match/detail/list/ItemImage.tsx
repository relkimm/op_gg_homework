import "./itemImage.css";

export interface ItemImageProps {
  imageUrl: string;
}

export function ItemImage({ imageUrl }: ItemImageProps) {
  return (
    <>
      <div className="item-image">
        <img src={imageUrl} />
      </div>
    </>
  );
}
