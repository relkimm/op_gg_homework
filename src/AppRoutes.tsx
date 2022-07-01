import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SummonerDetail } from "./summoner/detail/SummonerDetail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/summoner/:username" element={<SummonerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
