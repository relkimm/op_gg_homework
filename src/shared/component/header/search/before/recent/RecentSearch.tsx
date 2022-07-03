import { useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { deleteRecentAtom, fiveRecentAtom } from "./recentSearch.atom";
import { beforeSearchVisibleAtom } from "../beforeSearch.atom";
import { RecentSearchItem } from "./RecentSearchItem";
import { useGoPush } from "../../../../../hook/route";
import "./recentSearch.css";

export function RecentSearch() {
  const fiveRecent = useAtomValue(fiveRecentAtom);
  const deleteRecent = useSetAtom(deleteRecentAtom);
  const setBeforeSearchVisible = useSetAtom(beforeSearchVisibleAtom);
  const goPush = useGoPush();

  const onClickItem = useCallback(
    (word: string) => {
      setBeforeSearchVisible(false);
      goPush(`/summoner/${word}`);
    },
    [goPush]
  );

  const onDeleteItem = useCallback(
    (idx: number) => {
      deleteRecent(idx);
    },
    [deleteRecent]
  );

  return (
    <div className="recent-search">
      <ul>
        {fiveRecent.map((recent, idx) => (
          <RecentSearchItem
            key={`${recent}_${idx}`}
            idx={idx}
            word={recent}
            onClick={onClickItem}
            onDelete={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
