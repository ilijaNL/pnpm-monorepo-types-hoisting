import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Comp: React.FC = ({ children }) => <h1>{children}</h1>;

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Comp>
        <h1>Works</h1>
      </Comp>
    </QueryClientProvider>
  );
}
