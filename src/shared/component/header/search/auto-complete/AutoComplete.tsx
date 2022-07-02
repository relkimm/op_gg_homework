import { useCallback, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useDebounce } from "../../../../hook/debounce";
import { isUndefined, take } from "../../../../util/fs";
import { searchWordAtom } from "../searchBar.atom";
import { useSearchAutoComplete } from "./autoComplete.hook";
import { AutoCompleteItem } from "./AutoCompleteItem";
import { useSearch } from "../search.hook";
import { openAutoCompleteAtom } from "./autoComplete.atom";
import { useOnClickOutside } from "../../../../hook/event";
import { openRecentAtom } from "../recent/recentSearch.atom";
import "./autoComplete.css";

export function AutoComplete() {
  const searchWord = useAtomValue(searchWordAtom);
  const debounced = useDebounce(searchWord);
  const { data: searchResult } = useSearchAutoComplete(debounced);
  const search = useSearch();
  const setOpenAutoComplete = useSetAtom(openAutoCompleteAtom);
  const setOpenRecent = useSetAtom(openRecentAtom);

  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const onClickOutside = useCallback(() => {
    setOpenAutoComplete(false);
    setOpenRecent(false);
  }, [setOpenAutoComplete, setOpenRecent]);
  useOnClickOutside(autoCompleteRef, onClickOutside);

  const onClickItem = useCallback(
    (username: string) => {
      search(username);
    },
    [search]
  );

  if (isUndefined(searchResult)) {
    return null;
  }

  const { data: autoCompleteList } = searchResult;

  return (
    <div className="auto-complete" ref={autoCompleteRef}>
      <div className="list">
        <ul>
          {take(4, autoCompleteList).map((autoComplete) => (
            <AutoCompleteItem
              key={autoComplete.id}
              username={autoComplete.name}
              level={autoComplete.level}
              imageUrl={autoComplete.profile_image_url}
              onClick={onClickItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
