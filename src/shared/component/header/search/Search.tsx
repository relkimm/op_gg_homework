import { useAtomValue } from "jotai";
import { AutoComplete } from "./auto-complete/AutoComplete";
import { openAutoCompleteAtom } from "./auto-complete/autoComplete.atom";
import { RecentSearch } from "./recent/RecentSearch";
import { openRecentAtom } from "./recent/recentSearch.atom";
import { SearchBar } from "./SearchBar";

export function Search() {
  const openRecent = useAtomValue(openRecentAtom);
  const openAutoComplete = useAtomValue(openAutoCompleteAtom);

  return (
    <div className="search">
      <SearchBar />
      {openRecent && !openAutoComplete && <RecentSearch />}
      {openAutoComplete && <AutoComplete />}
    </div>
  );
}
