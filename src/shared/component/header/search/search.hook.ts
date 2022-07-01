import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { useGoPush } from "../../../hook/route";
import { openAutoCompleteAtom } from "./auto-complete/autoComplete.atom";
import { openRecentAtom, saveRecentAtom } from "./recent/recentSearch.atom";
import { searchWordAtom } from "./searchBar.atom";

export const useSearch = () => {
  const setSearchWord = useSetAtom(searchWordAtom);
  const saveRecent = useSetAtom(saveRecentAtom);
  const setOpenRecent = useSetAtom(openRecentAtom);
  const setOpenAutoComplete = useSetAtom(openAutoCompleteAtom);
  const goPush = useGoPush();

  return useCallback(
    (searchWord: string) => {
      if (searchWord) {
        setOpenRecent(false);
        setOpenAutoComplete(false);
        setSearchWord("");
        saveRecent(searchWord);
        goPush(`/summoner/${searchWord}`);
      }
    },
    [saveRecent, goPush]
  );
};
