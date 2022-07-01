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
        <div className="avatar-36">
          <img src={imageUrl} alt="" />
        </div>
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
