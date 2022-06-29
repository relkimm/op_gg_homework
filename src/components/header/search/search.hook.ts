import { useSetAtom } from "jotai";
import { saveRecentAtom } from "./recent/recentSearch.atom";

export const useSearch = () => {
  const saveRecent = useSetAtom(saveRecentAtom);

  return (searchWord: string) => {
    saveRecent(searchWord);
  };
};
