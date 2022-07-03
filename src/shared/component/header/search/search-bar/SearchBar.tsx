import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";
import "./searchBar.css";

export function SearchBar() {
  return (
    <div className="search-bar">
      <SearchInput />
      <SearchButton />
    </div>
  );
}
