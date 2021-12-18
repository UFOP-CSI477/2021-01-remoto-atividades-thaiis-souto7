import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </div>
  );
};
