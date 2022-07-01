import { Search } from "./search/Search";
import "./appHeader.css";
import { SummonerDetail } from "../summoner/SummonerDetail";

export function AppHeader() {
  return (
    <header className="app-header">
      <Search />
      <SummonerDetail />
    </header>
  );
}
