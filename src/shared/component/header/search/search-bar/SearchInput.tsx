import _ from "lodash";
import { useAtom, useSetAtom } from "jotai";
import { beforeSearchVisibleAtom } from "../before/beforeSearch.atom";
import { searchingVisibleAtom } from "../searching/searching.atom";
import { searchWordAtom } from "./searchBar.atom";
import { useSearch } from "../search.hook";
import { compose } from "../../../../util/fs";
import { trim, isNotBlank, len } from "../../../../util/string";

export function SearchInput() {
  const [searchWord, setSearchWord] = useAtom(searchWordAtom);
  const setBeforeSearchVisible = useSetAtom(beforeSearchVisibleAtom);
  const setSearchingVisible = useSetAtom(searchingVisibleAtom);
  const search = useSearch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) {
      setSearchingVisible(true);
    } else {
      setSearchingVisible(false);
      setBeforeSearchVisible(true);
    }
    setSearchWord(e.target.value);
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

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const length = _.flow(trim, len)(searchWord);
    if (length > 0) {
      setSearchingVisible(true);
    } else {
      setBeforeSearchVisible(true);
    }
  };

  return (
    <input
      type="text"
      value={searchWord}
      onChange={onChange}
      onKeyPress={onEnterSearch}
      onFocus={onFocus}
      placeholder="소환사명,챔피언…"
    />
  );
}
