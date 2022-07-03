import { useRef, useCallback } from "react";
import { useSetAtom } from "jotai";
import { beforeSearchVisibleAtom } from "../before/beforeSearch.atom";
import { searchingVisibleAtom } from "./searching.atom";
import { useOnClickOutside } from "../../../../hook/event";
import { AutoComplete } from "./auto-complete/AutoComplete";

export function Searching() {
  const setSearchingVisible = useSetAtom(searchingVisibleAtom);
  const setBeforeSearchVisible = useSetAtom(beforeSearchVisibleAtom);

  const searchingRef = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(() => {
    setSearchingVisible(false);
    setBeforeSearchVisible(false);
  }, [setSearchingVisible, setBeforeSearchVisible]);

  useOnClickOutside(searchingRef, onClickOutside);

  return (
    <div ref={searchingRef} className="searching">
      <AutoComplete />
    </div>
  );
}
