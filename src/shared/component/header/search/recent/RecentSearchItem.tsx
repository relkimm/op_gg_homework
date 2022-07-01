import { useSetAtom } from "jotai";
import { deleteRecentAtom } from "./recentSearch.atom";
import "./recentSearch.css";

interface RecentSearchItemProps {
  idx: number;
  word: string;
}

export function RecentSearchItem({ idx, word }: RecentSearchItemProps) {
  const deleteRecent = useSetAtom(deleteRecentAtom);

  const onClickDelete = () => {
    deleteRecent(idx);
  };

  return (
    <li className="item">
      <a>
        <span>{word}</span>
      </a>
      <button onClick={onClickDelete}>
        <img
          src="https://s-lol-web.op.gg/images/site/icon-history-delete.png"
          alt=""
        />
      </button>
    </li>
  );
}
