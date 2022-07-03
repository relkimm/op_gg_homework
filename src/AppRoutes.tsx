import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppHeader } from "./shared/component/header/AppHeader";
import { SummonerDetailPage } from "./summoner/detail/SummonerDetailPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/summoner/:username" element={<SummonerDetailPage />} />
        <Route
          path=""
          element={<Navigate replace to="/summoner/자메이카의영혼" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
