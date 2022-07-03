import { useAtomValue } from "jotai";
import { beforeSearchVisibleAtom } from "./before/beforeSearch.atom";
import { searchingVisibleAtom } from "./searching/searching.atom";
import { AutoComplete } from "./searching/auto-complete/AutoComplete";
import { BeforeSearch } from "./before/BeforeSearch";
import { SearchBar } from "./search-bar/SearchBar";

export function Search() {
  const beforeSearchVisible = useAtomValue(beforeSearchVisibleAtom);
  const searchingVisible = useAtomValue(searchingVisibleAtom);

  return (
    <div className="search">
      <SearchBar />
      {beforeSearchVisible && !searchingVisible && <BeforeSearch />}
      {searchingVisible && <AutoComplete />}
    </div>
  );
}
