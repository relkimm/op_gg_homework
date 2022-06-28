import { AutoComplete } from "./AutoComplete";
import { RecentSearch } from "./RecentSearch";
import { SearchBar } from "./SearchBar";

export function Search() {
  return (
    <>
      <SearchBar />
      <RecentSearch />
      <AutoComplete />
    </>
  );
}
