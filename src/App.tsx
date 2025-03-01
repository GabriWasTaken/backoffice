/* eslint-disable react/react-in-jsx-scope */
import { LogtoProvider, LogtoConfig } from '@logto/react';
import './App.css'
import AppRouter from './components/AppRouter';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const config: LogtoConfig = {
    endpoint: 'https://gsbkl0.logto.app/',
    appId: 'wx3xdbp1kzpr7e2xrjpyc',
  };
  const queryClient = new QueryClient();

  return (
    <LogtoProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </LogtoProvider>
  )
}

export default App
