import { Avatar } from "../../../../avatar/Avatar";
import "./autoComplete.css";

interface AutoCompleteItemProps {
  username: string;
  level: number;
  imageUrl: string;
  onClick: (username: string) => void;
}

export function AutoCompleteItem({
  username,
  level,
  imageUrl,
  onClick,
}: AutoCompleteItemProps) {
  return (
    <li className="item">
      <a onClick={() => onClick(username)}>
        <Avatar size="sm" imageUrl={imageUrl} />
        <div className="info">
          <div className="username">
            <span>{username}</span>
          </div>
          <div className="level">
            <span>Level {level}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
