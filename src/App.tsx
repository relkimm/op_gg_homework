import { QueryClient, QueryClientProvider } from "react-query";
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
        <AppRoutes />
      </div>
    </QueryClientProvider>
  );
}
