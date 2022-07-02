import { atom } from "jotai";

export type Menu = "champ" | "rank";

export const activeMenuAtom = atom<Menu>("champ");
