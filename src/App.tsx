import { QueryClient, QueryClientProvider } from "react-query";
import { AppHeader } from "./shared/component/header/AppHeader";
import "./app.css";
import { SummonerDetail } from "./summoner/detail/SummonerDetail";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <AppHeader />
        <SummonerDetail />
      </div>
    </QueryClientProvider>
  );
}
