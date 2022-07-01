import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { useGoPush } from "../../../hook/route";
import { saveRecentAtom } from "./recent/recentSearch.atom";

export const useSearch = () => {
  const saveRecent = useSetAtom(saveRecentAtom);
  const goPush = useGoPush();

  return useCallback(
    (searchWord: string) => {
      if (searchWord) {
        saveRecent(searchWord);
        goPush(`/summoner/${searchWord}`);
      }
    },
    [saveRecent, goPush]
  );
};
