import "./searchBar.css";

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="소환사명,챔피언…" />
      <button>
        <img src="https://s-lol-web.op.gg/images/icon/icon-gg.svg" alt="" />
      </button>
    </div>
  );
}
