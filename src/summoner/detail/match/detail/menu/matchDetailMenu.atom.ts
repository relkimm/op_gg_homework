import { atom } from "jotai";

type Menu = "all" | "solo" | "team";

export const activeMenuAtom = atom<Menu>("all");
