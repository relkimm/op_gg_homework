import { atom } from "jotai";

export type Menu = "free" | "rank";

export const activeMenuAtom = atom<Menu>("free");
