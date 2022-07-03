import { useCallback } from "react";
import { useAtomValue } from "jotai";
import { useDebounce } from "../../../../../hook/debounce";
import { isUndefined, take } from "../../../../../util/fs";
import { searchWordAtom } from "../../search-bar/searchBar.atom";
import { useSearchAutoComplete } from "./autoComplete.hook";
import { AutoCompleteItem } from "./AutoCompleteItem";
import { useSearch } from "../../search.hook";
import "./autoComplete.css";

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
  );
}
