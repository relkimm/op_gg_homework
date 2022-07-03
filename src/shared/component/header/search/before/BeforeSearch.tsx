import { useRef, useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { activeMenuAtom } from "./menu/beforeSearchMenu.atom";
import { beforeSearchVisibleAtom } from "./beforeSearch.atom";
import { useOnClickOutside } from "../../../../hook/event";
import { BeforeSearchMenu } from "./menu/BeforeSearchMenu";
import { BookmarkSearch } from "./bookmark/BookmarkSearch";
import { RecentSearch } from "./recent/RecentSearch";
import "./beforeSearch.css";

export function BeforeSearch() {
  const beforeSearchRef = useRef<HTMLDivElement>(null);
  const setBeforeSearchVisible = useSetAtom(beforeSearchVisibleAtom);
  const activeMenu = useAtomValue(activeMenuAtom);

  const onClickOutside = useCallback(() => {
    setBeforeSearchVisible(false);
  }, [setBeforeSearchVisible]);

  useOnClickOutside(beforeSearchRef, onClickOutside);

  return (
    <div ref={beforeSearchRef} className="before-search">
      <BeforeSearchMenu />
      {activeMenu === "recent" && <RecentSearch />}
      {activeMenu === "bookmark" && <BookmarkSearch />}
    </div>
  );
}
