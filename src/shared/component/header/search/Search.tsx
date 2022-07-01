import { AutoComplete } from "./auto-complete/AutoComplete";
import { RecentSearch } from "./recent/RecentSearch";
import { SearchBar } from "./SearchBar";

export function Search() {
  return (
    <div className="search">
      <SearchBar />
      {/* <RecentSearch /> */}
      <AutoComplete />
    </div>
  );
}
