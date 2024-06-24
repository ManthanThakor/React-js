import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import User from './components/datafethinching';

// Create a client
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <User/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
      
          </>
  );
}

export default App;
