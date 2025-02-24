import { LogtoProvider, LogtoConfig } from '@logto/react';
import './App.css'
import AppRouter from './components/AppRouter';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const config: LogtoConfig = {
    endpoint: 'https://qrnd96.logto.app/',
    appId: 'h92vhil932vbro74vaxyo',
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
