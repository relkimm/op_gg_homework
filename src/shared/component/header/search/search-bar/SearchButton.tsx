import { useAtomValue } from "jotai";
import { searchWordAtom } from "./searchBar.atom";
import { useSearch } from "../search.hook";
import { compose } from "../../../../util/fs";
import { trim, isNotBlank } from "../../../../util/string";

const OpggIcon = "https://s-lol-web.op.gg/images/icon/icon-gg.svg";

export function SearchButton() {
  const searchWord = useAtomValue(searchWordAtom);
  const search = useSearch();

  const onClickSearch = () => {
    const isValid = compose(trim, isNotBlank)(searchWord);
    if (isValid) {
      search(searchWord);
    } else {
      alert("검색어를 입력해 주세요.");
    }
  };

  return (
    <button onClick={onClickSearch}>
      <img src={OpggIcon} alt="opggIcon" />
    </button>
  );
}
