import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { take } from "../../../../util/fs";

const recentFromStorage = () => {
  const recentSearch = localStorage.getItem("recent_search");
  if (!recentSearch) {
    return [];
  }
  try {
    const parsed: string[] = JSON.parse(recentSearch);
    return parsed;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const recentAtom = atomWithStorage<string[]>(
  "recent_search",
  recentFromStorage()
);

export const fiveRecentAtom = atom((get) => take(5, get(recentAtom)));

export const saveRecentAtom = atom(null, (get, set, newItem: string) => {
  const next = get(recentAtom);
  next.unshift(newItem);
  set(recentAtom, [...next]);
});

export const deleteRecentAtom = atom(null, (get, set, deleteIndex: number) => {
  const next = get(recentAtom).filter((_, index) => index !== deleteIndex);
  set(recentAtom, next);
});
