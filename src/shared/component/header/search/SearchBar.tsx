import { useAtom, useSetAtom } from "jotai";
import React from "react";
import { compose } from "../../../util/fs";
import { isNotBlank, trim } from "../../../util/string";
import { openAutoCompleteAtom } from "./auto-complete/autoComplete.atom";
import { openRecentAtom } from "./recent/recentSearch.atom";
import { useSearch } from "./search.hook";
import { searchWordAtom } from "./searchBar.atom";
import "./searchBar.css";

export function SearchBar() {
  const [searchWord, setSearchWord] = useAtom(searchWordAtom);
  const setOpenRecent = useSetAtom(openRecentAtom);
  const setOpenAutoComplete = useSetAtom(openAutoCompleteAtom);
  const search = useSearch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) {
      setOpenAutoComplete(true);
    } else {
      setOpenAutoComplete(false);
    }
    setSearchWord(e.target.value);
  };

  const onClickSearch = () => {
    search(searchWord);
  };

  const onEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const isValid = compose(trim, isNotBlank)(searchWord);
      if (isValid) {
        search(searchWord);
      } else {
        alert("검색어를 입력해 주세요.");
      }
    }
  };

  const onFocus = (_: React.FocusEvent<HTMLInputElement>) => {
    setOpenRecent(true);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchWord}
        onChange={onChange}
        onKeyPress={onEnterSearch}
        onFocus={onFocus}
        placeholder="소환사명,챔피언…"
      />
      <button onClick={onClickSearch}>
        <img src="https://s-lol-web.op.gg/images/icon/icon-gg.svg" alt="" />
      </button>
    </div>
  );
}
