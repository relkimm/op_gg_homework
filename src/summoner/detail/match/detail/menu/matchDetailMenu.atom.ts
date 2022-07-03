import { atom } from "jotai";

export type Menu = "all" | "solo" | "team";

export const activeMenuAtom = atom<Menu>("all");
