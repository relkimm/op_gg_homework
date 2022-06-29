import { useAtomValue } from "jotai";
import { useDebounce } from "../../../../shared/hook/debounce";
import { isUndefined } from "../../../../shared/util/fs";
import { searchWordAtom } from "../searchBar.atom";
import "./autoComplete.css";
import { useSearchAutoComplete } from "./autoComplete.hook";
import { AutoCompleteItem } from "./AutoCompleteItem";

export function AutoComplete() {
  const searchWord = useAtomValue(searchWordAtom);
  const debounced = useDebounce(searchWord);
  const { data: searchResult } = useSearchAutoComplete(debounced);

  if (isUndefined(searchResult)) {
    return null;
  }

  const { data: autoCompleteList } = searchResult;

  return (
    <div className="auto-complete">
      <div className="list">
        <ul>
          {autoCompleteList.map((autoComplete) => (
            <AutoCompleteItem
              key={autoComplete.id}
              username={autoComplete.name}
              level={autoComplete.level}
              imageUrl={autoComplete.profile_image_url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
