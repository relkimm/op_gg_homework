import "./recentSearch.css";

interface RecentSearchItemProps {
  idx: number;
  word: string;
  onClick: (word: string) => void;
  onDelete: (idx: number) => void;
}

export function RecentSearchItem({
  idx,
  word,
  onClick,
  onDelete,
}: RecentSearchItemProps) {
  return (
    <li className="item">
      <a onClick={() => onClick(word)}>
        <span>{word}</span>
      </a>
      <button onClick={() => onDelete(idx)}>
        <img
          src="https://s-lol-web.op.gg/images/site/icon-history-delete.png"
          alt=""
        />
      </button>
    </li>
  );
}
