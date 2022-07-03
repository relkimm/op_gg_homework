import { atom } from "jotai";

export const searchWordAtom = atom<string>("");

export const focusingAtom = atom<boolean>(false);
