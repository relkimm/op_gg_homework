import { atom } from "jotai";

export type Menu = "recent" | "bookmark";

export const activeMenuAtom = atom<Menu>("recent");
