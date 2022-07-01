import { useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useDebounce } from "../../../../hook/debounce";
import { isUndefined, take } from "../../../../util/fs";
import { searchWordAtom } from "../searchBar.atom";
import "./autoComplete.css";
import { useSearchAutoComplete } from "./autoComplete.hook";
import { AutoCompleteItem } from "./AutoCompleteItem";
import { useSearch } from "../search.hook";
import { openAutoCompleteAtom } from "./autoComplete.atom";

export function AutoComplete() {
  const searchWord = useAtomValue(searchWordAtom);
  const debounced = useDebounce(searchWord);
  const { data: searchResult } = useSearchAutoComplete(debounced);
  const search = useSearch();

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
    <div className="auto-complete">
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
