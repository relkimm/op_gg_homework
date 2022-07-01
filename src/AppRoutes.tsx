import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppHeader } from "./shared/component/header/AppHeader";
import { SummonerDetail } from "./summoner/detail/SummonerDetail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/summoner/:username" element={<SummonerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
