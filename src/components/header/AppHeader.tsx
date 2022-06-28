import { Search } from "./search/Search";
import "./appHeader.css";

export function AppHeader() {
  return (
    <header className="app-header">
      <Search />
    </header>
  );
}
