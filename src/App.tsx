import { QueryClient, QueryClientProvider } from "react-query";
import { AppHeader } from "./shared/component/header/AppHeader";
import { AppRoutes } from "./AppRoutes";
import "./app.css";

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
        <AppRoutes />
      </div>
    </QueryClientProvider>
  );
}
