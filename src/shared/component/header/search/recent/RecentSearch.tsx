import { useCallback, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  deleteRecentAtom,
  fiveRecentAtom,
  openRecentAtom,
} from "./recentSearch.atom";
import { RecentSearchItem } from "./RecentSearchItem";
import { useGoPush } from "../../../../hook/route";
import "./recentSearch.css";
import { useOnClickOutside } from "../../../../hook/event";

export function RecentSearch() {
  const fiveRecent = useAtomValue(fiveRecentAtom);
  const deleteRecent = useSetAtom(deleteRecentAtom);
  const setOpenRecent = useSetAtom(openRecentAtom);
  const goPush = useGoPush();

  const recentRef = useRef<HTMLDivElement>(null);
  const onClickOutside = useCallback(() => {
    setOpenRecent(false);
  }, [setOpenRecent]);
  useOnClickOutside(recentRef, onClickOutside);

  const onClickItem = useCallback(
    (word: string) => {
      setOpenRecent(false);
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
    <div className="recent-search" ref={recentRef}>
      <div className="menu">
        <button>최근검색</button>
        <button>즐겨찾기</button>
      </div>
      <div className="list">
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
    </div>
  );
}
