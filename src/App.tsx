import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CountryList from "./components/CountryList";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <CountryList />
      </QueryClientProvider>
    </>
  );
}

export default App;
