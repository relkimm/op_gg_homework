import { useCallback } from "react";
import { useSetAtom } from "jotai";
import { useGoPush } from "../../../hook/route";
import { saveRecentAtom } from "./before/recent/recentSearch.atom";
import { searchWordAtom } from "./search-bar/searchBar.atom";
import { beforeSearchVisibleAtom } from "./before/beforeSearch.atom";
import { searchingVisibleAtom } from "./searching/searching.atom";

export const useSearch = () => {
  const setSearchWord = useSetAtom(searchWordAtom);
  const saveRecent = useSetAtom(saveRecentAtom);
  const setBeforeSearchVisible = useSetAtom(beforeSearchVisibleAtom);
  const setSearchingVisible = useSetAtom(searchingVisibleAtom);
  const goPush = useGoPush();

  return useCallback(
    (searchWord: string) => {
      if (searchWord) {
        setBeforeSearchVisible(false);
        setSearchingVisible(false);
        setSearchWord("");
        saveRecent(searchWord);
        goPush(`/summoner/${searchWord}`);
      }
    },
    [
      setBeforeSearchVisible,
      setSearchingVisible,
      setSearchWord,
      saveRecent,
      goPush,
    ]
  );
};
