import { DefaultAvatar } from "../../constant";
import "./avatar.css";

type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps {
  size: AvatarSize;
  imageUrl: string;
}

export function Avatar({ size, imageUrl }: AvatarProps) {
  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DefaultAvatar();
  };

  return (
    <div className={`avatar-${size}`}>
      <img src={imageUrl} alt="avatar" onError={onError} />
    </div>
  );
}
