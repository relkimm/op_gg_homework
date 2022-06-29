import "./autoComplete.css";

interface AutoCompleteItemProps {
  username: string;
  level: number;
  imageUrl: string;
}

export function AutoCompleteItem({
  username,
  level,
  imageUrl,
}: AutoCompleteItemProps) {
  return (
    <li className="item">
      <a>
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
