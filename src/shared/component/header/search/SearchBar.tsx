import { useAtom } from "jotai";
import { useSearch } from "./search.hook";
import { searchWordAtom } from "./searchBar.atom";
import "./searchBar.css";

export function SearchBar() {
  const [searchWord, setSearchWord] = useAtom(searchWordAtom);
  const search = useSearch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const onClickSearch = () => {
    search(searchWord);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchWord}
        onChange={onChange}
        placeholder="소환사명,챔피언…"
      />
      <button onClick={onClickSearch}>
        <img src="https://s-lol-web.op.gg/images/icon/icon-gg.svg" alt="" />
      </button>
    </div>
  );
}
